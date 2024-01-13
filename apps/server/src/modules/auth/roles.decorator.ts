import { SetMetadata } from '@nestjs/common'
import { RolesT } from '../../Models'

export const Roles = (...roles: RolesT[]) => SetMetadata('roles', roles)
