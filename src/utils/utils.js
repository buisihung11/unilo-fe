// IMAGES
import badge1 from '../assets/icons/honeypot1.png'
import badge2 from '../assets/icons/honeypot2.png'
import badge3 from '../assets/icons/honeypot3.png'
import { WALLET_TYPE } from '../constraints'

export const getBadgeImage = (type) => {
  switch (type) {
    case WALLET_TYPE.BADGE_1:
      return badge1
    case WALLET_TYPE.BADGE_2:
      return badge2
    case WALLET_TYPE.BADGE_3:
      return badge3
    default:
      return badge1
  }
}

export const sleep = (amount) =>
  new Promise((res) => {
    setTimeout(() => {
      res()
    }, amount)
  })
