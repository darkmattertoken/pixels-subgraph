// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Pixel extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Pixel entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Pixel entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Pixel", id.toString(), this);
  }

  static load(id: string): Pixel | null {
    return store.get("Pixel", id) as Pixel | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get color(): string {
    let value = this.get("color");
    return value.toString();
  }

  set color(value: string) {
    this.set("color", Value.fromString(value));
  }

  get lastChangeBlock(): BigInt {
    let value = this.get("lastChangeBlock");
    return value.toBigInt();
  }

  set lastChangeBlock(value: BigInt) {
    this.set("lastChangeBlock", Value.fromBigInt(value));
  }
}

export class User extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save User entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save User entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("User", id.toString(), this);
  }

  static load(id: string): User | null {
    return store.get("User", id) as User | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get text(): string | null {
    let value = this.get("text");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set text(value: string | null) {
    if (value === null) {
      this.unset("text");
    } else {
      this.set("text", Value.fromString(value as string));
    }
  }
}

export class DayData extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save DayData entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save DayData entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("DayData", id.toString(), this);
  }

  static load(id: string): DayData | null {
    return store.get("DayData", id) as DayData | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get date(): i32 {
    let value = this.get("date");
    return value.toI32();
  }

  set date(value: i32) {
    this.set("date", Value.fromI32(value));
  }

  get dailyPixelsBought(): i32 {
    let value = this.get("dailyPixelsBought");
    return value.toI32();
  }

  set dailyPixelsBought(value: i32) {
    this.set("dailyPixelsBought", Value.fromI32(value));
  }

  get totalPixelsBought(): i32 {
    let value = this.get("totalPixelsBought");
    return value.toI32();
  }

  set totalPixelsBought(value: i32) {
    this.set("totalPixelsBought", Value.fromI32(value));
  }

  get dailyETH(): BigDecimal {
    let value = this.get("dailyETH");
    return value.toBigDecimal();
  }

  set dailyETH(value: BigDecimal) {
    this.set("dailyETH", Value.fromBigDecimal(value));
  }

  get totalETH(): BigDecimal {
    let value = this.get("totalETH");
    return value.toBigDecimal();
  }

  set totalETH(value: BigDecimal) {
    this.set("totalETH", Value.fromBigDecimal(value));
  }
}

export class OverallData extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save OverallData entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save OverallData entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("OverallData", id.toString(), this);
  }

  static load(id: string): OverallData | null {
    return store.get("OverallData", id) as OverallData | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get totalPixelsBought(): i32 {
    let value = this.get("totalPixelsBought");
    return value.toI32();
  }

  set totalPixelsBought(value: i32) {
    this.set("totalPixelsBought", Value.fromI32(value));
  }

  get totalETH(): BigDecimal {
    let value = this.get("totalETH");
    return value.toBigDecimal();
  }

  set totalETH(value: BigDecimal) {
    this.set("totalETH", Value.fromBigDecimal(value));
  }
}
