import gql from 'graphql-tag'
import sendRequest from '@/libs/graphql/sendRequest'

interface UpdateProfileQuery {
  updateProfile: {
    url: string
  }
}

interface UploadFileProps {
  email: string
}

export const updateProfile = async (file: any, email: string): Promise<UpdateProfileQuery | void> => {
  const query = gql`
    mutation updateProfile($file: Upload!, $email: String!) {
      updateProfile(file: $file, email: $email) {
        url
      }
    }
  `
  return sendRequest<UpdateProfileQuery>(query, { file, email })
}
