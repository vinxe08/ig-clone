"use client"
import { atom } from 'recoil'

export const modalState = atom({
  key: "modalState",
  default: false
})

export const emojiState = atom({
  key: "emojiState",
  default: false
})