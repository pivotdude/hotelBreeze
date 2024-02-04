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
import { CountryModule } from './country/country.module'
import { ServeStaticModule } from '@nestjs/serve-static'
import { HotelModule } from './hotel/hotel.module'
import { FavoriteModule } from './favorite/favorite.module'
import { ReviewModule } from './review/review.module'
import { RootResolver } from './root.resolver'
import { CorsMiddleware } from './cors.middleware'

@Module({
  providers: [
    {
      provide: 'ROLES_GUARD',
      useClass: RolesGuard,
    },
    RootResolver,
    CorsMiddleware,
  ],
  imports: [
    PrismaModule,
    RoleModule,
    UserModule,
    PostModule,
    AuthModule,
    MailModule,
    CountryModule,
    HotelModule,
    FavoriteModule,
    ReviewModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true, //join(process.cwd(), 'src/schema.gql'),
      // typeDefs: [join(process.cwd(), 'src/schema.gql')],
      installSubscriptionHandlers: true,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      include: [
        RoleModule,
        UserModule,
        PostModule,
        AuthModule,
        CountryModule,
        HotelModule,
        FavoriteModule,
        ReviewModule,
      ],
      context: ({ req }) => {
        return { token: req.headers.Authorization }
      },
    }),
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      serveRoot: '/static',
    }),
  ],
})
export class AppModule {}
