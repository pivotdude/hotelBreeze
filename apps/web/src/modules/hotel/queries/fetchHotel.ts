import gql from 'graphql-tag'
import sendRequest from '@/libs/graphql/sendRequest'

export interface IHotel {
  uid: string
  price: number
  title: string
  description: string
  reviewRating: number
  reviewCount: number
  previewImage: {
    url: string
    name: string
  }
  city: {
    name: string
    country: {
      name: string
    }
  }
  images: {
    url: string
    name: string
  }[]
  data: {
    rooms: {
      extras: string[]
      beds: string
      bath: string
    }
    maxGuests: number
    isEntireHome: boolean
  }
  favorites: {
    uid: string
  }[]
  isFollow: boolean
  reviews: {
    uid: string
    description: string
    createdAt: string
    rating: number
    user: {
      name: string
    }
  }[]
  bookings: {
    startDate: string
    endDate: string
  }[]
  userReview: {
    uid: string
    description: string
    createdAt: string
    rating: number
    user: {
      name: string
    }
  }
}

export interface HotelQuery {
  hotel: IHotel
}

export const fetchHotel = async (uid: string): Promise<HotelQuery | void> => {
  const query = gql`
    query GetHotel($uid: String!) {
      hotel(uid: $uid) {
        uid
        title
        description
        price
        reviewRating
        reviewCount
        previewImage {
          url
          name
        }
        city {
          name
          country {
            name
          }
        }
        data {
          rooms {
            extras
            beds
            bath
          }
          maxGuests
          isEntireHome
        }
        images {
          url
          name
        }
        favorites {
          uid
        }
        reviews {
          uid
          createdAt
          description
          rating
          user {
            name
          }
        }
        bookings {
          startDate
          endDate
        }
        userReview {
          uid
          createdAt
          description
          rating
          user {
            name
          }
        }
        isFollow
      }
    }
  `
  return sendRequest<HotelQuery>(query, { uid })
}
