'use client'
import { actionUnFollow } from '@/modules/hotel/queries/actionUnFollow'
import { actionFollow } from '@/modules/hotel/queries/actionFollow'
import FollowIcon from '@/components/ui/FollowIcon/FollowIcon'
import { Button } from '@/ui'
import { usePathname, useRouter } from 'next/navigation'

interface FollowButtonProps {
  isFollow: boolean
  hotelUid: string
  uid: string
}

function FollowButton({ isFollow, uid, hotelUid }: FollowButtonProps) {
  const router = useRouter()
  const pathname = usePathname()

  const toggleFollow = async () => {
    isFollow ? await actionUnFollow(uid) : await actionFollow(hotelUid)
    router.refresh()
  }

  return (
    <Button
      type={isFollow ? 'primary' : 'default'}
      shape="round"
      icon={<FollowIcon isFollowed={isFollow} />}
      size="large"
      onClick={toggleFollow}
    >
      {isFollow ? 'Отписаться' : 'Подписаться'}
    </Button>
  )
}

export default FollowButton
