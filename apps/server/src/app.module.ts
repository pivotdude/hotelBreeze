import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { PostModule } from './post/post.module'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default'
import { PrismaModule } from './prisma/prisma.module'
import { join } from 'path'
import { UserModule } from './user/user.module'
import { RoleModule } from './role/role.module'
import { MailModule } from './mail/mail.module'
import { AuthModule } from './modules/auth/auth.module'
import { ConfigModule } from '@nestjs/config'
import { RolesGuard } from './modules/auth/roles.guard'

@Module({
  providers: [
    {
      provide: 'ROLES_GUARD',
      useClass: RolesGuard,
    },
  ],
  imports: [
    PrismaModule,
    RoleModule,
    UserModule,
    PostModule,
    AuthModule,
    MailModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      installSubscriptionHandlers: true,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      include: [RoleModule, UserModule, PostModule, AuthModule],
    }),
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
  ],
})
export class AppModule {}
