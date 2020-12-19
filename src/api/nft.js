//  api for trade
import BaseApi from './baseApi'
//  api for query
import chainState from "../store/modules/chainState"
//  util for model
import {stringToHex} from '@polkadot/util'

const PALLET_NAME = 'nftModule'

export default class Nft {

  /**
   * @description 1）创建NFT
   * @param form
   * @param callBack
   * @returns {Promise<void>}
   * @constructor
   */
  static NFT_Add(
    form,
    callBack
  ){
    return BaseApi.signAndSend(
      PALLET_NAME,
      'mintNft',
      callBack,
      form.categoryHash,
      stringToHex(form.metaData),
      stringToHex(form.desc),
      form.price
    )
  }

  /**
   * @description 2）出售NFT
   * @param form
   * @param callBack
   * @returns {Promise<void>}
   * @constructor
   */
  static NFT_Offer(
    form,
    callBack
  ){
    return BaseApi.signAndSend(
      PALLET_NAME,
      'offerNft',
      callBack,
      form.nft_id,
      form.new_price
    )
  }
  /**
   * @description   1）交易中心购买NFT
   * @param nft_id
   * @param callBack
   * @returns {Promise<void>}
   * @constructor
   */
  static NFT_Buy(
    nft_id,
    callBack
  ){
    return BaseApi.signAndSend(
      PALLET_NAME,
      'buyNft',
      callBack,
      nft_id
    )
  }
  /**
   * @description   2）交税
   * @param nft_id
   * @param callBack
   * @returns {Promise<void>}
   * @constructor
   */
  static NFT_Tax(
    nft_id,
    callBack
  ){
    return BaseApi.signAndSend(
      PALLET_NAME,
      'payTax',
      callBack,
      nft_id
    )
  }



  /**
   * @description add NFT Category
   * @param form
   * @param callBack
   * @returns {Promise<void>}
   * @constructor
   */
  static Category_Add(
    form,
    callBack
  ) {
    return BaseApi.signAndSend(
      PALLET_NAME,
      'createClass',
      callBack,
      form.orginData,
      form.totalSupply,
      stringToHex(form.desc)
    )
  }

  /**
   * @description get NFT Category IdList
   * @returns {Promise<void>}
   * @constructor
   */
  static async Category_IdList() {
    let res = await chainState.state.Api.query[PALLET_NAME].classList()
    res = res.toJSON()
    return res
  }
}
