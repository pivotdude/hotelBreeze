import { http, HttpResponse } from 'msw'
import constants from '@/constants'
import ImageCard from '@/modules/main/source/card.png'

const ImagesHandlers = [
  http.get(`http://${constants.BACKEND_URL}/static/*`, async ({ request, params, cookies }) => {
    // @ts-ignore
    const image = await fetch(ImageCard).then((res) => res.arrayBuffer())
    return HttpResponse.arrayBuffer(image)
    // ctx.set('Content-Length', ),
    // ctx.set('Content-Type', 'image/png'),
    // ctx.body(image)
  }),
]

export default ImagesHandlers
