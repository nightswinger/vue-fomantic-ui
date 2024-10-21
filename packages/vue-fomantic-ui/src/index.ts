import { App } from "vue"

import * as components from './components'

import Button from './components/Button/Button'
import ButtonContent from './components/Button/ButtonContent'
import ButtonGroup from './components/Button/ButtonGroup'
import Container from './components/Container/Container'
import Divider from './components/Divider/Divider'
import Emoji from './components/Emoji/Emoji'
import Flag from './components/Flag/Flag'
import Header from './components/Header/Header'
import HeaderContent from './components/Header/HeaderContent'
import HeaderSubheader from './components/Header/HeaderSubheader'
import Icon from './components/Icon/Icon'
import IconGroup from './components/Icon/IconGroup'
import Image from './components/Image/Image'
import ImageGroup from './components/Image/ImageGroup'
import Input from './components/Input/Input'
import Label from './components/Label/Label'
import LabelDetail from './components/Label/LabelDetail'
import LabelGroup from './components/Label/LabelGroup'
import List from './components/List/List'
import ListContent from './components/List/ListContent'
import ListDescription from './components/List/ListDescription'
import ListHeader from './components/List/ListHeader'
import ListIcon from './components/List/ListIcon'
import ListItem from './components/List/ListItem'
import ListList from './components/List/ListList'
import Loader from './components/Loader/Loader'
import Rail from './components/Rail/Rail'
import Reveal from './components/Reveal/Reveal'
import RevealContent from './components/Reveal/RevealContent'
import Segment from './components/Segment/Segment'
import SegmentGroup from './components/Segment/SegmentGroup'
import SegmentInline from './components/Segment/SegmentInline'
import Step from './components/Step/Step'
import StepContent from './components/Step/StepContent'
import StepDescription from './components/Step/StepDescription'
import StepGroup from './components/Step/StepGroup'
import StepTitle from './components/Step/StepTitle'

import Breadcrumb from './components/Breadcrumb/Breadcrumb'
import BreadcrumbDivider from './components/Breadcrumb/BreadcrumbDivider'
import BreadcrumbSection from './components/Breadcrumb/BreadcrumbSection'
import Form from './components/Form/Form'
import FormField from './components/Form/FormField'
import FormGroup from './components/Form/FormGroup'
import FormTextarea from './components/Form/FormTextarea'
import Grid from './components/Grid/Grid'
import GridColumn from './components/Grid/GridColumn'
import GridRow from './components/Grid/GridRow'
import Menu from './components/Menu/Menu'
import MenuHeader from './components/Menu/MenuHeader'
import MenuItem from './components/Menu/MenuItem'
import MenuMenu from './components/Menu/MenuMenu'
import Message from './components/Message/Message'
import MessageContent from './components/Message/MessageContent'
import MessageHeader from './components/Message/MessageHeader'
import MessageItem from './components/Message/MessageItem'
import MessageList from './components/Message/MessageList'
import Table from './components/Table/Table'
import TableBody from './components/Table/TableBody'
import TableCell from './components/Table/TableCell'
import TableFooter from './components/Table/TableFooter'
import TableHeader from './components/Table/TableHeader'
import TableHeaderCell from './components/Table/TableHeaderCell'
import TableRow from './components/Table/TableRow'

import Advertisement from './components/Advertisement/Advertisement'
import Card from './components/Card/Card'
import CardContent from './components/Card/CardContent'
import CardDescription from './components/Card/CardDescription'
import CardGroup from './components/Card/CardGroup'
import CardHeader from './components/Card/CardHeader'
import CardMeta from './components/Card/CardMeta'
import Comment from './components/Comment/Comment'
import CommentAction from './components/Comment/CommentAction'
import CommentActions from './components/Comment/CommentActions'
import CommentAuthor from './components/Comment/CommentAuthor'
import CommentAvatar from './components/Comment/CommentAvatar'
import CommentContent from './components/Comment/CommentContent'
import CommentGroup from './components/Comment/CommentGroup'
import CommentMetadata from './components/Comment/CommentMetadata'
import CommentText from './components/Comment/CommentText'
import Feed from './components/Feed/Feed'
import FeedContent from './components/Feed/FeedContent'
import FeedDate from './components/Feed/FeedDate'
import FeedEvent from './components/Feed/FeedEvent'
import FeedExtra from './components/Feed/FeedExtra'
import FeedLabel from './components/Feed/FeedLabel'
import FeedLike from './components/Feed/FeedLike'
import FeedMeta from './components/Feed/FeedMeta'
import FeedSummary from './components/Feed/FeedSummary'
import FeedUser from './components/Feed/FeedUser'
import Item from './components/Item/Item'
import ItemContent from './components/Item/ItemContent'
import ItemDescription from './components/Item/ItemDescription'
import ItemExtra from './components/Item/ItemExtra'
import ItemGroup from './components/Item/ItemGroup'
import ItemHeader from './components/Item/ItemHeader'
import ItemImage from './components/Item/ItemImage'
import ItemMeta from './components/Item/ItemMeta'
import Statistic from './components/Statistic/Statistic'
import StatisticGroup from './components/Statistic/StatisticGroup'
import StatisticLabel from './components/Statistic/StatisticLabel'
import StatisticValue from './components/Statistic/StatisticValue'

import Accordion from './components/Accordion/Accordion'
import AccordionAccordion from './components/Accordion/AccordionAccordion'
import AccordionContent from './components/Accordion/AccordionContent'
import AccordionTab from './components/Accordion/AccordionTab'
import AccordionTitle from './components/Accordion/AccordionTitle'
import Calendar from './components/Calendar/Calendar'
import Checkbox from './components/Checkbox/Checkbox'
import Dimmer from './components/Dimmer/Dimmer'
import DimmerDimmable from './components/Dimmer/DimmerDimmable'
import Dropdown from './components/Dropdown/Dropdown'
import Embed from './components/Embed/Embed'
import Flyout from './components/Flyout/Flyout'
import Modal from './components/Modal/Modal'
import ModalActions from './components/Modal/ModalActions'
import ModalContent from './components/Modal/ModalContent'
import ModalDescription from './components/Modal/ModalDescription'
import ModalHeader from './components/Modal/ModalHeader'
import Popup from './components/Popup/Popup'
import Progress from './components/Progress/Progress'
import Rating from './components/Rating/Rating'
import Sidebar from './components/Sidebar/Sidebar'
import Slider from './components/Slider/Slider'
import Tab from './components/Tab/Tab'
import TabPanel from './components/Tab/TabPanel'
import Transition from './components/Transition/Transition'

function install(app: App) {
  Object.values({
    ...components,
  }).map((component) => app.use(component))
}

export default { install };

export { Button as SuiButton, Button }
export { ButtonContent as SuiButtonContent, ButtonContent }
export { ButtonGroup as SuiButtonGroup, ButtonGroup }
export { Container as SuiContainer, Container }
export { Divider as SuiDivider, Divider }
export { Emoji as SuiEmoji, Emoji }
export { Flag as SuiFlag, Flag }
export { Header as SuiHeader, Header }
export { HeaderContent as SuiHeaderContent, HeaderContent }
export { HeaderSubheader as SuiHeaderSubheader, HeaderSubheader }
export { Icon as SuiIcon, Icon }
export { IconGroup as SuiIconGroup, IconGroup }
export { Image as SuiImage, Image }
export { ImageGroup as SuiImageGroup, ImageGroup }
export { Input as SuiInput, Input }
export { Label as SuiLabel, Label }
export { LabelDetail as SuiLabelDetail, LabelDetail }
export { LabelGroup as SuiLabelGroup, LabelGroup }
export { List as SuiList, List }
export { ListContent as SuiListContent, ListContent }
export { ListDescription as SuiListDescription, ListDescription }
export { ListHeader as SuiListHeader, ListHeader }
export { ListIcon as SuiListIcon, ListIcon }
export { ListItem as SuiListItem, ListItem }
export { ListList as SuiListList, ListList }
export { Loader as SuiLoader, Loader }
export { Rail as SuiRail, Rail }
export { Reveal as SuiReveal, Reveal }
export { RevealContent as SuiRevealContent, RevealContent }
export { Segment as SuiSegment, Segment }
export { SegmentGroup as SuiSegmentGroup, SegmentGroup }
export { SegmentInline as SuiSegmentInline, SegmentInline }
export { Step as SuiStep, Step }
export { StepContent as SuiStepContent, StepContent }
export { StepDescription as SuiStepDescription, StepDescription }
export { StepGroup as SuiStepGroup, StepGroup }
export { StepTitle as SuiStepTitle, StepTitle }

export { Breadcrumb as SuiBreadcrumb, Breadcrumb }
export { BreadcrumbDivider as SuiBreadcrumbDivider, BreadcrumbDivider }
export { BreadcrumbSection as SuiBreadcrumbSection, BreadcrumbSection }
export { Form as SuiForm, Form }
export { FormField as SuiFormField, FormField }
export { FormGroup as SuiFormGroup, FormGroup }
export { FormTextarea as SuiFormTextarea, FormTextarea }
export { Grid as SuiGrid, Grid }
export { GridColumn as SuiGridColumn, GridColumn }
export { GridRow as SuiGridRow, GridRow }
export { Menu as SuiMenu, Menu }
export { MenuHeader as SuiMenuHeader, MenuHeader }
export { MenuItem as SuiMenuItem, MenuItem }
export { MenuMenu as SuiMenuMenu, MenuMenu }
export { Message as SuiMessage, Message }
export { MessageContent as SuiMessageContent, MessageContent }
export { MessageHeader as SuiMessageHeader, MessageHeader }
export { MessageItem as SuiMessageItem, MessageItem }
export { MessageList as SuiMessageList, MessageList }
export { Table as SuiTable, Table }
export { TableBody as SuiTableBody, TableBody }
export { TableCell as SuiTableCell, TableCell }
export { TableFooter as SuiTableFooter, TableFooter }
export { TableHeader as SuiTableHeader, TableHeader }
export { TableHeaderCell as SuiTableHeaderCell, TableHeaderCell }
export { TableRow as SuiTableRow, TableRow }
export { Column } from './components/Table'

export { Advertisement as SuiAdvertisement, Advertisement }
export { Card as SuiCard, Card }
export { CardContent as SuiCardContent, CardContent }
export { CardDescription as SuiCardDescription, CardDescription }
export { CardGroup as SuiCardGroup, CardGroup }
export { CardHeader as SuiCardHeader, CardHeader }
export { CardMeta as SuiCardMeta, CardMeta }
export { Comment as SuiComment, Comment }
export { CommentAction as SuiCommentAction, CommentAction }
export { CommentActions as SuiCommentActions, CommentActions }
export { CommentAuthor as SuiCommentAuthor, CommentAuthor }
export { CommentAvatar as SuiCommentAvatar, CommentAvatar }
export { CommentContent as SuiCommentContent, CommentContent }
export { CommentGroup as SuiCommentGroup, CommentGroup }
export { CommentMetadata as SuiCommentMetadata, CommentMetadata }
export { CommentText as SuiCommentText, CommentText }
export { Feed as SuiFeed, Feed }
export { FeedContent as SuiFeedContent, FeedContent }
export { FeedDate as SuiFeedDate, FeedDate }
export { FeedEvent as SuiFeedEvent, FeedEvent }
export { FeedExtra as SuiFeedExtra, FeedExtra }
export { FeedLabel as SuiFeedLabel, FeedLabel }
export { FeedLike as SuiFeedLike, FeedLike }
export { FeedMeta as SuiFeedMeta, FeedMeta }
export { FeedSummary as SuiFeedSummary, FeedSummary }
export { FeedUser as SuiFeedUser, FeedUser }
export { Item as SuiItem, Item }
export { ItemContent as SuiItemContent, ItemContent }
export { ItemDescription as SuiItemDescription, ItemDescription }
export { ItemExtra as SuiItemExtra, ItemExtra }
export { ItemGroup as SuiItemGroup, ItemGroup }
export { ItemHeader as SuiItemHeader, ItemHeader }
export { ItemImage as SuiItemImage, ItemImage }
export { ItemMeta as SuiItemMeta, ItemMeta }
export { Statistic as SuiStatistic, Statistic }
export { StatisticGroup as SuiStatisticGroup, StatisticGroup }
export { StatisticLabel as SuiStatisticLabel, StatisticLabel }
export { StatisticValue as SuiStatisticValue, StatisticValue }

export { Accordion as SuiAccordion, Accordion }
export { AccordionAccordion as SuiAccordionAccordion, AccordionAccordion }
export { AccordionContent as SuiAccordionContent, AccordionContent }
export { AccordionTab as SuiAccordionTab, AccordionTab }
export { AccordionTitle as SuiAccordionTitle, AccordionTitle }
export { Calendar as SuiCalendar, Calendar }
export { Checkbox as SuiCheckbox, Checkbox }
export { Dimmer as SuiDimmer, Dimmer }
export { DimmerDimmable as SuiDimmerDimmable, DimmerDimmable }
export { Dropdown as SuiDropdown, Dropdown }
export { Embed as SuiEmbed, Embed }
export { Flyout }
export { Modal as SuiModal, Modal }
export { ModalActions as SuiModalActions, ModalActions }
export { ModalContent as SuiModalContent, ModalContent }
export { ModalDescription as SuiModalDescription, ModalDescription }
export { ModalHeader as SuiModalHeader, ModalHeader }
export { Popup as SuiPopup, Popup }
export { Progress as SuiProgress, Progress }
export { Rating as SuiRating, Rating }
export { Sidebar as SuiSidebar, Sidebar }
export { Slider as SuiSlider, Slider }
export { Tab as SuiTab, Tab }
export { TabPanel as SuiTabPanel, TabPanel }
export { Transition as SuiTransition, Transition }

export { useToast } from './components/Toast/useToast'
