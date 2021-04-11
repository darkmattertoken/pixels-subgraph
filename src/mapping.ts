import { BuyPixel, Transfer, ColorPixel, TextUpdate } from '../generated/Pixels/Pixels'
import { Pixel, User } from '../generated/schema'

export function handleBuyPixel(event: BuyPixel): void {
  let pixel = new Pixel(event.params._id.toString())
  pixel.owner = event.params._buyer
  pixel.color = "#" + event.params._color.toHex().slice(2).padStart(6, '0')
  pixel.lastChangeBlock = event.block.number;
  pixel.save()
}

export function handleColorPixel(event: ColorPixel): void {
  let id = event.params._id.toString()
  let pixel = Pixel.load(id)
  if (pixel == null) {
    return;
  }
  pixel.color = "#" + event.params._color.toHex().slice(2).padStart(6, '0')
  pixel.lastChangeBlock = event.block.number;
  pixel.save()
}

export function handleTransfer(event: Transfer): void {
  let id = event.params.tokenId.toString()
  let pixel = Pixel.load(id)
  if (pixel == null) {
    return;
  }
  pixel.owner = event.params.to;
  pixel.lastChangeBlock = event.block.number;
  pixel.save()
}

export function handleTextUpdate(event: TextUpdate): void {
  let id = event.params._account.toHexString()
  let user = User.load(id)
  if (user == null) {
    user = new User(id)
  }
  user.text = event.params._website
  user.save()
}