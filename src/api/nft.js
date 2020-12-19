//  api for trade
import BaseApi from './baseApi'
//  api for query
import chainState from "../store/modules/chainState"
//  util for model
import {stringToHex} from '@polkadot/util'

const PALLET_NAME = 'nftModule'

export default class Nft {

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
      // form.orginData,
      '32312',
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
