import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { PostModule } from '@/modules/post/post.module'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default'
import { PrismaModule } from './prisma/prisma.module'
import { join } from 'path'
import { UserModule } from '@/modules/user/user.module'
import { RoleModule } from '@/modules/role/role.module'
import { MailModule } from '@/modules/mail/mail.module'
import { AuthModule } from './modules/auth/auth.module'
import { ConfigModule } from '@nestjs/config'
import { RolesGuard } from './modules/auth/roles.guard'
import { CountryModule } from '@/modules/country/country.module'
import { ServeStaticModule } from '@nestjs/serve-static'
import { HotelModule } from '@/modules/hotel/hotel.module'
import { FavoriteModule } from '@/modules/favorite/favorite.module'
import { ReviewModule } from '@/modules/review/review.module'
import { RootResolver } from './root.resolver'
import { Request } from 'express'
import { BookingModule } from '@/modules/booking/booking.module'

@Module({
  providers: [
    {
      provide: 'ROLES_GUARD',
      useClass: RolesGuard,
    },
    RootResolver,
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
    BookingModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
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
        BookingModule,
      ],
      context: ({ req }: { req: Request }) => {
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
