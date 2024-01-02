'use client'
import { Col, DatePicker, Row } from 'antd'
import CardList from '@/components/ui/InfoCard/CardList'

const { RangePicker } = DatePicker

export default function Booking() {
  return (
    <Row gutter={[16, 16]} className="px-32">
      <Col xs={24}>
        <div className="grid xxl:grid-cols-4 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 gap-4">
          <CardList
            width={480}
            items={[
              {
                title: 'Title 1',
                description: 'Description 1',
                src: 'https://steamuserimages-a.akamaihd.net/ugc/243587272524349844/1F640010C8DB01D03A79F5E8017183FB0E588AAF/?imw=512&amp;imh=367&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true',
              },
              {
                title: 'Title 1',
                description: 'Description 1',
                src: 'https://steamuserimages-a.akamaihd.net/ugc/243587272524349844/1F640010C8DB01D03A79F5E8017183FB0E588AAF/?imw=512&amp;imh=367&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true',
              },
              {
                title: 'Title 1',
                description: 'Description 1',
                src: 'https://steamuserimages-a.akamaihd.net/ugc/243587272524349844/1F640010C8DB01D03A79F5E8017183FB0E588AAF/?imw=512&amp;imh=367&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true',
              },
              {
                title: 'Title 1',
                description: 'Description 1',
                src: 'https://steamuserimages-a.akamaihd.net/ugc/243587272524349844/1F640010C8DB01D03A79F5E8017183FB0E588AAF/?imw=512&amp;imh=367&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true',
              },
              {
                title: 'Title 1',
                description: 'Description 1',
                src: 'https://steamuserimages-a.akamaihd.net/ugc/243587272524349844/1F640010C8DB01D03A79F5E8017183FB0E588AAF/?imw=512&amp;imh=367&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true',
              },
              {
                title: 'Title 1',
                description: 'Description 1',
                src: 'https://steamuserimages-a.akamaihd.net/ugc/243587272524349844/1F640010C8DB01D03A79F5E8017183FB0E588AAF/?imw=512&amp;imh=367&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true',
              },
              {
                title: 'Title 1',
                description: 'Description 1',
                src: 'https://steamuserimages-a.akamaihd.net/ugc/243587272524349844/1F640010C8DB01D03A79F5E8017183FB0E588AAF/?imw=512&amp;imh=367&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true',
              },
              {
                title: 'Title 1',
                description: 'Description 1',
                src: 'https://steamuserimages-a.akamaihd.net/ugc/243587272524349844/1F640010C8DB01D03A79F5E8017183FB0E588AAF/?imw=512&amp;imh=367&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true',
              },
            ]}
          />
        </div>
      </Col>
    </Row>
  )
}
