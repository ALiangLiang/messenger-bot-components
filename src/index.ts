import classToInvokable from './classToInvokable'

import Abstract from './Abstract'

import AudioComponent from './Audio'
import FileComponent from './File'
import GetStartedComponent from './GetStarted'
import GreetingComponent from './Greeting'
import ImageComponent from './Image'
import PersistentMenuComponent from './PersistentMenu'
import QuickReplyComponent from './QuickReply'
import TextComponent from './Text'
import VideoComponent from './Video'

import {
  ButtonAccountLink as ButtonAccountLinkComponent,
  ButtonAccountUnlink as ButtonAccountUnlinkComponent,
  ButtonElementShare as ButtonElementShareComponent,
  ButtonNested as ButtonNestedComponent,
  ButtonPhoneNumber as ButtonPhoneNumberComponent,
  ButtonPostback as ButtonPostbackComponent,
  ButtonUrl as ButtonUrlComponent
} from './Button/'

import {
  TemplateButton as TemplateButtonComponent,
  TemplateGeneric as TemplateGenericComponent,
  TemplateList as TemplateListComponent,
  TemplateReceipt as TemplateReceiptComponent
} from './Template/'

export const Audio = classToInvokable(AudioComponent)
export const File = classToInvokable(FileComponent)
export const GetStarted = classToInvokable(GetStartedComponent)
export const Greeting = classToInvokable(GreetingComponent)
export const Image = classToInvokable(ImageComponent)
export const PersistentMenu = classToInvokable(PersistentMenuComponent)
export const QuickReply = classToInvokable(QuickReplyComponent)
export const Text = classToInvokable(TextComponent)
export const Video = classToInvokable(VideoComponent)

export const ButtonAccountLink = classToInvokable(ButtonAccountLinkComponent)
export const ButtonAccountUnlink = classToInvokable(ButtonAccountUnlinkComponent)
export const ButtonElementShare = classToInvokable(ButtonElementShareComponent)
export const ButtonNested = classToInvokable(ButtonNestedComponent)
export const ButtonPhoneNumber = classToInvokable(ButtonPhoneNumberComponent)
export const ButtonPostback = classToInvokable(ButtonPostbackComponent)
export const ButtonUrl = classToInvokable(ButtonUrlComponent)

export const TemplateButton = classToInvokable(TemplateButtonComponent)
export const TemplateGeneric = classToInvokable(TemplateGenericComponent)
export const TemplateList = classToInvokable(TemplateListComponent)
export const TemplateReceipt = classToInvokable(TemplateReceiptComponent)

export default {
  Audio,
  File,
  GetStarted,
  Greeting,
  Image,
  PersistentMenu,
  QuickReply,
  Text,
  Video,

  ButtonAccountLink,
  ButtonAccountUnlink,
  ButtonElementShare,
  ButtonNested,
  ButtonPhoneNumber,
  ButtonPostback,
  ButtonUrl,

  TemplateButton,
  TemplateGeneric,
  TemplateList,
  TemplateReceipt
}
