import { BigDecimal, BigInt, log } from '@graphprotocol/graph-ts'
import { BuyPixel, Transfer, ColorPixel, TextUpdate } from '../generated/Pixels/Pixels'
import { DayData, OverallData, Pixel, User } from '../generated/schema'

let PIXEL_PRICE = BigDecimal.fromString('0.001');

export function handleBuyPixel(event: BuyPixel): void {
  let pixel = new Pixel(event.params._id.toString())
  pixel.owner = event.params._buyer
  pixel.color = "#" + event.params._color.toHex().slice(2).padStart(6, '0')
  pixel.lastChangeBlock = event.block.number;
  pixel.save()

  let stats = OverallData.load('0');
  if (!stats) {
    stats = new OverallData('0')
    stats.totalPixelsBought = 0;
    stats.totalETH = BigDecimal.fromString('0')
  }

  stats.totalPixelsBought++;
  stats.totalETH = stats.totalETH.plus(PIXEL_PRICE)
  stats.save()

  let timestamp = event.block.timestamp.toI32()
  let dayID = timestamp / 86400
  let dayStartTimestamp = dayID * 86400
  let day = DayData.load(dayID.toString());
  if (!day) {
    day = new DayData(dayID.toString());
    day.dailyPixelsBought = 0
    day.date = dayStartTimestamp;
    day.dailyETH = BigDecimal.fromString('0')
    day.totalETH = BigDecimal.fromString('0')
  }
  day.dailyPixelsBought++;
  day.dailyETH = day.dailyETH.plus(PIXEL_PRICE)
  day.totalETH = stats.totalETH;
  day.totalPixelsBought = stats.totalPixelsBought;
  day.save();
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