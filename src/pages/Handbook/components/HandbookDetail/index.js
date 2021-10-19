import { StyledContent } from '../HandbookStyle'
import bear1 from '../../../../assets/images/gauxanh4.png'
import bear2 from '../../../../assets/images/gauxanh7.png'
import bear3 from '../../../../assets/icons/bear-4.png'
import bear4 from '../../../../assets/images/gauxanh2.png'
import bear5 from '../../../../assets/images/gauxanh6.png'
import { ExpandableItemWithImage } from '../../../../components'

const handbookList = [
  {
    no: 1,
    label: 'Gấu Subie là ai?',
    img: bear1,
    children:
      'Gấu Subie sẽ là bạn đồng hành của bạn trong xuyên suốt hành trình trải nghiệm của bạn. Hãy cùng Subie săn thiệt nhiều quà nha!!',
    isShown: true,
  },
  {
    no: 2,
    label: 'Làm thế nào để tích được hạt dẻ?',
    img: bear2,
    children:
      'Bạn cũng Gấu Subie hãy tham gia thực hiện các nhiệm vụ để thu thập hạt dẻ nha. Để xem thông tin cụ thể về nhiệm vụ, hãy chọn nhiệm vụ ở ngoài màn hình chính nhá',
    isShown: false,
  },
  {
    no: 3,
    label: 'Dùng hạt dẻ để làm gì?',
    img: bear3,
    children:
      'Muốn tham gia trò chơi thì phải làm gì? Phải có lượt chơi. Làm sao để có lượt chơi? Dùng hạt dẻ để đổi lượt chơi nè.',
    isShown: false,
  },
  {
    no: 4,
    label: 'Có bao nhiêu loạt mật ong?',
    img: bear4,
    children:
      'Gấu Subie sẽ được sở hữu 3 loại mật ong khác nhau: mật ong thường, mật ong thượng hạng và mật ong cao cấp. Giá trí của mật ong cũng tăng theo từng loại.',
    isShown: false,
  },
  {
    no: 5,
    label: 'Đổi quà như thế nào?',
    img: bear5,
    children:
      'Hãy tham gia gian hàng ưu đãi để đổi lấy các phần quà thật hấp dẫn nhé',
    isShown: false,
  },
]

export default function HandbookDetail(props) {
  return (
    <StyledContent>
      {handbookList.map((detail) => (
        <ExpandableItemWithImage
          key={detail.no}
          isShown={detail.isShown}
          no={detail.no}
          label={detail.label}
          img={detail.img}
          children={detail.children}
        />
      ))}
    </StyledContent>
  )
}
