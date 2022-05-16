 import {useState} from "react"

const array1= [
    {
        "company_details": {
          "name": "Updated Raju368+USGrower21 Company Name",
          "contact_name": "Raju368+USGrower21",
          "payee_name": "Raju368+USGrower21 Payee Name",
          "contact_email": "Raju368+USGrower21@gmail.com",
          "legal_address": "Raju368+USGrower21 Legal Address",
          "mobile_number": "+13434343434",
          "zipcode": "435435",
          "state": "Alabama",
          "city": "city",
          "sfdc_id": "SFID 1234",
          "status": "Actual_Purchases_Approved"
        },
        "retailer_details": {
          "retailer": "Raju368+USGrower21 Retailer / Customer Name",
          "sales_rep_email": null,
          "sales_rep_name": null,
          "retailer_location": null,
          "created_by": "vansham SSR"
        },
        "committed_purchases": {
          "request_id": "4964b202-3f90-4a93-959a-4e7b8e44a93b",
          "season_id": "544041ba-b662-485e-96b9-2e043b4cd814",
          "campaign_offer": "With the Commodity Price Protection Offer, Syngenta and Co-Alliance will share in your risk of decreasing commodity prices, ensuring that you receive up to 15% cashback on premium products if the market takes an unfavorable turn later in the season\nMust purchase a minimum of 500 acres of qualifying products for corn and/or soy\nCorn offer:\nFor corn purchases, qualifying products include:\n1. Fungicides required: Trivapro ® or Miravis ® Neo\n2. Optional herbicides: Acuron ®, Acuron ® Flexi, Acuron ® GT, Halex ® GT, or Lexar ®\n3. Optional seed: NK ® Corn",
          "season_name": "Corn Co-Alliance Seed & CP 2021-22",
          "decimal_format": "CommaAsDecimal",
          "crop_name": "Corn",
          "currency_purchase": "USD",
          "unit_of_measure": "Acres",
          "request_status": "Actual_Purchases_Approved",
          "request_stage": "ActualPurchases",
          "committed_CP_purchase": 2137.3,
          "committed_CP_volume": 10,
          "cp_area": 10,
          "committed_SE_purchase": 0,
          "committed_SE_volume": 0,
          "se_area": 101,
          "total_committed_area": 101,
          "total_committed_purchase": 2137.3,
          "programs": {
            "CP": {
              "Fungicides": {
                "mandatory": false,
                "products": [
                  {
                    "id": "3fe76032-fac7-409f-800c-d5607c5b16d2",
                    "created_at": "2022-03-04T11:07:37.466Z",
                    "updated_at": "2022-03-04T11:07:37.466Z",
                    "is_deleted": false,
                    "business_unit": "CP",
                    "type": "Fungicides",
                    "product_brand": "Miravis Neo ®",
                    "uom": "Gallons",
                    "program_price_per_uom": "213.73",
                    "volume": 10,
                    "actual_volume": "20.00"
                  }
                ]
              }
            }
          }
        },
        "products": [
          {
            "id": "3fe76032-fac7-409f-800c-d5607c5b16d2",
            "created_at": "2022-03-04T11:07:37.466Z",
            "updated_at": "2022-03-04T11:07:37.466Z",
            "is_deleted": false,
            "business_unit": "CP",
            "type": "Fungicides",
            "product_brand": "Miravis Neo ®",
            "uom": "Gallons",
            "program_price_per_uom": "213.73",
            "volume": "10.00"
          }
        ],
        "season": {
          "id": "544041ba-b662-485e-96b9-2e043b4cd814",
          "name": "Corn Co-Alliance Seed & CP 2021-22",
          "description": "Secure corn risk protection in autumn for your Syngenta 2022 seed and CP purchases",
          "offer": "With the Commodity Price Protection Offer, Syngenta and Co-Alliance will share in your risk of decreasing commodity prices, ensuring that you receive up to 15% cashback on premium products if the market takes an unfavorable turn later in the season\nMust purchase a minimum of 500 acres of qualifying products for corn and/or soy\nCorn offer:\nFor corn purchases, qualifying products include:\n1. Fungicides required: Trivapro ® or Miravis ® Neo\n2. Optional herbicides: Acuron ®, Acuron ® Flexi, Acuron ® GT, Halex ® GT, or Lexar ®\n3. Optional seed: NK ® Corn",
          "crop_year": "2021-22",
          "is_active": true,
          "business_units": ["SE", "CP"],
          "price_per_unit_conversion": "USCentsPerBushel",
          "price_per_unit_underlying_index": "USCentsPerBushel",
          "max_option_premium_per_deal": null,
          "notional_value_limit": null,
          "settlement_type": "AsianSettlement",
          "european_date": null,
          "price_fixation_limit": "Once",
          "price_fix_start_date": "2022-04-26T09:22:34.846Z",
          "price_fix_last_date": "2022-05-31T09:22:34.846Z",
          "payout_start_date": "2022-04-26T09:22:41.764Z",
          "payout_end_date": "2022-05-31T09:22:41.764Z",
          "registration_cutoff_date": null,
          "document_completion_cutoff": null,
          "unit_of_measure": "Acres",
          "currency_purchase": "USD",
          "currency_option": "USD",
          "time_zone": "USCST",
          "decimal_format": "CommaAsDecimal",
          "date_format": "DDMMYYYY",
          "status": "Submitted",
          "submitted_date": "2022-04-26T09:22:46.783Z",
          "start_date": "2022-04-26T09:21:51.178Z",
          "end_date": "2022-06-30T09:21:53.171Z",
          "crop": {
            "id": "ad349018-33a7-4cbd-91e7-d7636338461a",
            "name": "Corn"
          },
          "country": {
            "id": "dfc81f89-f02a-46f0-a198-ad859197548c",
            "name": "US",
            "country_code": "US"
          },
          "retailer": {
            "id": "c95a1028-545e-4da8-bba5-1bc74ece32a2",
            "created_at": "2021-12-17T07:23:30.679Z",
            "updated_at": "2021-12-17T07:23:30.679Z",
            "is_deleted": false,
            "name": "Co-Alliance",
            "country": "US"
          },
          "programs": [
            {
              "id": "deb671cf-6c5a-4bc0-a837-295483b9a2a7",
              "program_type": "Product Growth",
              "program_subtype": "SE_Product_Growth",
              "eligibility_start_date": "2022-04-26T09:21:45.717Z",
              "eligibility_end_date": "2022-05-31T09:21:45.717Z",
              "target_growth_versus_last_year": "0.00",
              "minimum_growth_purchase_threshold": null,
              "loyalty_points": [],
              "minimum_target_purchases": 0,
              "products": {
                "Seeds": {
                  "mandatory": false,
                  "products": [
                    {
                      "id": "8a70462a-cc44-41f2-ab20-905049212967",
                      "created_at": "2022-03-04T11:07:37.466Z",
                      "updated_at": "2022-03-04T11:07:37.466Z",
                      "is_deleted": false,
                      "business_unit": "SE",
                      "type": "Seeds",
                      "product_brand": "NK ® Corn",
                      "uom": "Units",
                      "program_price_per_uom": "267",
                      "retailer": {
                        "id": "c95a1028-545e-4da8-bba5-1bc74ece32a2",
                        "created_at": "2021-12-17T07:23:30.679Z",
                        "updated_at": "2021-12-17T07:23:30.679Z",
                        "is_deleted": false,
                        "name": "Co-Alliance",
                        "country": "US"
                      },
                      "minimum_volume": "0"
                    }
                  ]
                }
              }
            },
            {
              "id": "243ff9b4-8fa7-403a-a79b-b3e370acf34c",
              "program_type": "Product Growth",
              "program_subtype": "CP_Product_Growth",
              "eligibility_start_date": "2022-04-26T09:21:42.485Z",
              "eligibility_end_date": "2022-05-31T09:21:42.485Z",
              "target_growth_versus_last_year": "0.00",
              "minimum_growth_purchase_threshold": null,
              "loyalty_points": [],
              "minimum_target_purchases": 0,
              "products": {
                "Fungicides": {
                  "mandatory": false,
                  "products": [
                    {
                      "id": "3fe76032-fac7-409f-800c-d5607c5b16d2",
                      "created_at": "2022-03-04T11:07:37.466Z",
                      "updated_at": "2022-03-04T11:07:37.466Z",
                      "is_deleted": false,
                      "business_unit": "CP",
                      "type": "Fungicides",
                      "product_brand": "Miravis Neo ®",
                      "uom": "Gallons",
                      "program_price_per_uom": "213.73",
                      "retailer": {
                        "id": "c95a1028-545e-4da8-bba5-1bc74ece32a2",
                        "created_at": "2021-12-17T07:23:30.679Z",
                        "updated_at": "2021-12-17T07:23:30.679Z",
                        "is_deleted": false,
                        "name": "Co-Alliance",
                        "country": "US"
                      },
                      "minimum_volume": "0"
                    },
                    {
                      "id": "80b51a47-1bfc-4fb7-bee8-54b7bb3c643e",
                      "created_at": "2022-03-04T11:07:37.466Z",
                      "updated_at": "2022-03-04T11:07:37.466Z",
                      "is_deleted": false,
                      "business_unit": "CP",
                      "type": "Fungicides",
                      "product_brand": "Trivapro ®",
                      "uom": "Gallons",
                      "program_price_per_uom": "201.52",
                      "retailer": {
                        "id": "c95a1028-545e-4da8-bba5-1bc74ece32a2",
                        "created_at": "2021-12-17T07:23:30.679Z",
                        "updated_at": "2021-12-17T07:23:30.679Z",
                        "is_deleted": false,
                        "name": "Co-Alliance",
                        "country": "US"
                      },
                      "minimum_volume": "0"
                    }
                  ]
                }
              }
            }
          ],
          "comodity_exchange_indexes": [
            {
              "id": 369,
              "barchart_code": "ZCZ22",
              "exchange": "CBOT",
              "future_year": "2022",
              "maturity": "Dec",
              "name": "Corn_CBOT_Dec_2022"
            }
          ],
          "hedging_instruments": [
            {
              "id": 336,
              "call_strike2_percentage": 0,
              "put_strike2_percentage": 85,
              "hedging_instrument_type": "PutSpread"
            }
          ]
        },
        "documents": {
          "Commitment": [
            {
              "fileName": "kefw9l346mb6n-13_05_2022-growerProgramCommitments.pdf",
              "download_url": "kefw9l346mb6n-13_05_2022-growerProgramCommitments.pdf",
              "content_type": null,
              "content_size": 46077080,
              "created_at": "2022-05-13T08:39:16.582Z",
              "updated_at": "2022-05-13T08:39:16.582Z",
              "id": 2854,
              "status": null,
              "type": "Commitment",
              "identifier": null,
              "amount": 0
            },
            {
              "fileName": "1hl9l34cr38h-13_05_2022-growerProgramCommitments.pdf",
              "download_url": "1hl9l34cr38h-13_05_2022-growerProgramCommitments.pdf",
              "content_type": null,
              "content_size": 16223374,
              "created_at": "2022-05-13T11:24:40.555Z",
              "updated_at": "2022-05-13T11:24:40.555Z",
              "id": 2860,
              "status": null,
              "type": "Commitment",
              "identifier": null,
              "amount": 0
            }
          ],
          "Actuals": [
            {
              "fileName": "1h8d21h9l34a826m-13_05_2022-growerProgramActuals.pdf",
              "download_url": "1h8d21h9l34a826m-13_05_2022-growerProgramActuals.pdf",
              "content_type": null,
              "content_size": 11119739,
              "created_at": "2022-05-13T10:14:08.065Z",
              "updated_at": "2022-05-13T10:14:08.065Z",
              "id": 2859,
              "status": null,
              "type": "Actuals",
              "identifier": null,
              "amount": 0
            },
            {
              "fileName": "1ku0j9l34cthj1-13_05_2022-growerProgramActuals.pdf",
              "download_url": "1ku0j9l34cthj1-13_05_2022-growerProgramActuals.pdf",
              "content_type": null,
              "content_size": 4013256,
              "created_at": "2022-05-13T11:26:31.692Z",
              "updated_at": "2022-05-13T11:26:31.692Z",
              "id": 2865,
              "status": null,
              "type": "Actuals",
              "identifier": null,
              "amount": 0
            }
          ]
        },
        "season_product_data": [
          {
            "request_id": "4964b202-3f90-4a93-959a-4e7b8e44a93b",
            "season_id": "544041ba-b662-485e-96b9-2e043b4cd814",
            "campaign_offer": "With the Commodity Price Protection Offer, Syngenta and Co-Alliance will share in your risk of decreasing commodity prices, ensuring that you receive up to 15% cashback on premium products if the market takes an unfavorable turn later in the season\nMust purchase a minimum of 500 acres of qualifying products for corn and/or soy\nCorn offer:\nFor corn purchases, qualifying products include:\n1. Fungicides required: Trivapro ® or Miravis ® Neo\n2. Optional herbicides: Acuron ®, Acuron ® Flexi, Acuron ® GT, Halex ® GT, or Lexar ®\n3. Optional seed: NK ® Corn",
            "season_name": "Corn Co-Alliance Seed & CP 2021-22",
            "decimal_format": "CommaAsDecimal",
            "crop_name": "Corn",
            "currency_purchase": "USD",
            "unit_of_measure": "Acres",
            "request_status": "Actual_Purchases_Approved",
            "request_stage": "ActualPurchases",
            "committed_CP_purchase": 2137.3,
            "committed_CP_volume": 10,
            "cp_area": 10,
            "committed_SE_purchase": 0,
            "committed_SE_volume": 0,
            "se_area": 101,
            "total_committed_area": 101,
            "total_committed_purchase": 2137.3,
            "programs": {
              "CP": {
                "Fungicides": {
                  "mandatory": false,
                  "products": [
                    {
                      "id": "3fe76032-fac7-409f-800c-d5607c5b16d2",
                      "created_at": "2022-03-04T11:07:37.466Z",
                      "updated_at": "2022-03-04T11:07:37.466Z",
                      "is_deleted": false,
                      "business_unit": "CP",
                      "type": "Fungicides",
                      "product_brand": "Miravis Neo ®",
                      "uom": "Gallons",
                      "program_price_per_uom": "213.73",
                      "volume": 10,
                      "actual_volume": "20.00"
                    }
                  ]
                }
              }
            }
          },
          {
            "request_id": "61a65058-4a68-4234-ac39-1a848b9d4156",
            "season_id": "32b8e685-2b78-42c8-8efe-82ac28142d56",
            "campaign_offer": "With the Commodity Price Protection Offer, Syngenta and Co-Alliance will share in your risk of decreasing commodity prices, ensuring that you receive up to 15% cashback on premium products if the market takes an unfavorable turn later in the season\nMust purchase a minimum of 500 acres of qualifying products for corn and/or soy\nCorn offer:\nFor corn purchases, qualifying products include:\n1. Fungicides required: Trivapro ® or Miravis ® Neo\n2. Optional herbicides: Acuron ®, Acuron ® Flexi, Acuron ® GT, Halex ® GT, or Lexar ®\n3. Optional seed: NK ® Corn",
            "season_name": "Co-Alliance Soy Seed & CP 2021-22",
            "decimal_format": "CommaAsDecimal",
            "crop_name": "Soy",
            "currency_purchase": "USD",
            "unit_of_measure": "Acres",
            "request_status": "Customer_Validated",
            "request_stage": "Registration",
            "committed_CP_purchase": 0,
            "committed_CP_volume": 0,
            "cp_area": 10,
            "committed_SE_purchase": 0,
            "committed_SE_volume": 0,
            "se_area": 0,
            "total_committed_area": 10,
            "total_committed_purchase": 0,
            "programs": {}
          },
          {
            "request_id": "691bbfe6-7680-4835-a1aa-a514ac8d3032",
            "season_id": "6f64e099-b1e9-43a5-9697-4a53a66d527c",
            "campaign_offer": "With the Commodity Price Protection Offer, Syngenta and Co-Alliance will share in your risk of decreasing commodity prices, ensuring that you receive up to 15% cashback on premium products if the market takes an unfavorable turn later in the season\nMust purchase a minimum of 500 acres of qualifying products for corn and/or soy\nCorn offer:\nFor corn purchases, qualifying products include:\n1. Fungicides required: Trivapro ® or Miravis ® Neo\n2. Optional herbicides: Acuron ®, Acuron ® Flexi, Acuron ® GT, Halex ® GT, or Lexar ®\n3. Optional seed: NK ® Corn",
            "season_name": "Co-Alliance Corn Seed & CP 2022/23",
            "decimal_format": "PointAsDecimal",
            "crop_name": "Corn",
            "currency_purchase": "USD",
            "unit_of_measure": "Hectares",
            "request_status": "Customer_Validated",
            "request_stage": "Registration",
            "committed_CP_purchase": 0,
            "committed_CP_volume": 0,
            "cp_area": 10,
            "committed_SE_purchase": 0,
            "committed_SE_volume": 0,
            "se_area": 10,
            "total_committed_area": 10,
            "total_committed_purchase": 0,
            "programs": {}
          },
          {
            "request_id": "b2b1b736-bed3-450a-a5f7-00438f1d6df5",
            "season_id": "fdbd290a-0361-4580-a386-f5c3258caa69",
            "campaign_offer": "With the Commodity Price Protection Offer, Syngenta and Co-Alliance will share in your risk of decreasing commodity prices, ensuring that you receive up to 15% cashback on premium products if the market takes an unfavorable turn later in the season\nMust purchase a minimum of 500 acres of qualifying products for corn and/or soy\nCorn offer:\nFor corn purchases, qualifying products include:\n1. Fungicides required: Trivapro ® or Miravis ® Neo\n2. Optional herbicides: Acuron ®, Acuron ® Flexi, Acuron ® GT, Halex ® GT, or Lexar ®\n3. Optional seed: NK ® Corn",
            "season_name": "Co-Alliance Corn Seed & CP 2021-22",
            "decimal_format": "CommaAsDecimal",
            "crop_name": "Corn",
            "currency_purchase": "USD",
            "unit_of_measure": "Acres",
            "request_status": "Customer_Validated",
            "request_stage": "Registration",
            "committed_CP_purchase": 0,
            "committed_CP_volume": 0,
            "cp_area": 10,
            "committed_SE_purchase": 0,
            "committed_SE_volume": 0,
            "se_area": 10,
            "total_committed_area": 10,
            "total_committed_purchase": 0,
            "programs": {}
          },
          {
            "request_id": "fc40b47d-b247-4952-8002-7dc7f586737b",
            "season_id": "6e9ef1c3-88b1-4962-aad3-d7b30f2fd5c0",
            "campaign_offer": "With the Commodity Price Protection Offer, Syngenta and Co-Alliance will share in your risk of decreasing commodity prices, ensuring that you receive up to 15% cashback on premium products if the market takes an unfavorable turn later in the season\nMust purchase a minimum of 500 acres of qualifying products for corn and/or soy\nCorn offer:\nFor corn purchases, qualifying products include:\n1. Fungicides required: Trivapro ® or Miravis ® Neo\n2. Optional herbicides: Acuron ®, Acuron ® Flexi, Acuron ® GT, Halex ® GT, or Lexar ®\n3. Optional seed: NK ® Corn",
            "season_name": "Soy Co-Alliance Seed & CP 2021-22",
            "decimal_format": "PointAsDecimal",
            "crop_name": "Soy",
            "currency_purchase": "USD",
            "unit_of_measure": "Acres",
            "request_status": "Customer_Validated",
            "request_stage": "Registration",
            "committed_CP_purchase": 0,
            "committed_CP_volume": 0,
            "cp_area": 10,
            "committed_SE_purchase": 520,
            "committed_SE_volume": 10,
            "se_area": 10,
            "total_committed_area": 10,
            "total_committed_purchase": 520,
            "programs": {
              "SE": {
                "Seeds": {
                  "mandatory": true,
                  "products": [
                    {
                      "id": "067d26ce-5d60-42e6-8014-14baf392e465",
                      "created_at": "2022-03-04T11:07:37.466Z",
                      "updated_at": "2022-03-04T11:07:37.466Z",
                      "is_deleted": false,
                      "business_unit": "SE",
                      "type": "Seeds",
                      "product_brand": "NK ® Soy",
                      "uom": "Units",
                      "program_price_per_uom": "52",
                      "volume": 10,
                      "actual_volume": "0.00"
                    }
                  ]
                }
              }
            }
          }
        ],
        "season_actuals_data": {
          "request_id": "4964b202-3f90-4a93-959a-4e7b8e44a93b",
          "season_id": "544041ba-b662-485e-96b9-2e043b4cd814",
          "campaign_offer": "With the Commodity Price Protection Offer, Syngenta and Co-Alliance will share in your risk of decreasing commodity prices, ensuring that you receive up to 15% cashback on premium products if the market takes an unfavorable turn later in the season\nMust purchase a minimum of 500 acres of qualifying products for corn and/or soy\nCorn offer:\nFor corn purchases, qualifying products include:\n1. Fungicides required: Trivapro ® or Miravis ® Neo\n2. Optional herbicides: Acuron ®, Acuron ® Flexi, Acuron ® GT, Halex ® GT, or Lexar ®\n3. Optional seed: NK ® Corn",
          "season_name": "Corn Co-Alliance Seed & CP 2021-22",
          "decimal_format": "CommaAsDecimal",
          "crop_name": "Corn",
          "currency_purchase": "USD",
          "unit_of_measure": "Acres",
          "request_status": "Actual_Purchases_Approved",
          "request_stage": "ActualPurchases",
          "committed_CP_purchase": 2137.3,
          "committed_CP_volume": 10,
          "cp_area": 10,
          "committed_SE_purchase": 0,
          "committed_SE_volume": 0,
          "se_area": 101,
          "total_committed_area": 101,
          "total_committed_purchase": 2137.3,
          "programs": {
            "CP": {
              "Fungicides": {
                "mandatory": false,
                "products": [
                  {
                    "id": "3fe76032-fac7-409f-800c-d5607c5b16d2",
                    "created_at": "2022-03-04T11:07:37.466Z",
                    "updated_at": "2022-03-04T11:07:37.466Z",
                    "is_deleted": false,
                    "business_unit": "CP",
                    "type": "Fungicides",
                    "product_brand": "Miravis Neo ®",
                    "uom": "Gallons",
                    "program_price_per_uom": "213.73",
                    "volume": 10,
                    "actual_volume": "20.00"
                  }
                ]
              }
            }
          },
          "total_actual_area": "20.00",
          "actual_CP_purchase": 4274.6,
          "actual_CP_volume": 20,
          "actual_SE_purchase": 0,
          "actual_SE_volume": 0,
          "total_actual_purchase": 4274.6
        }
      }
]

const JsonData = () => {

    const [totalData, setTotalData] = useState([])

    const getTotalData = () => {
        const seasonActualsDataCpObject = array1.map(each => 
            each["season_actuals_data"]["programs"]["CP"]["Fungicides"]["products"])

            
            const seasonProductDataCpObject = array1.map(each => 
               
                    each["season_product_data"]["4964b202-3f90-4a93-959a-4e7b8e44a93b"]
                    ["programs"]["CP"]["Fungicides"]["products"]) 

            
            const seasonProductDataSeObject = array1.map(each => 
                each["season_product_data"]["fc40b47d-b247-4952-8002-7dc7f586737b"]["programs"]["Seeds"]["products"])

            


            console.log(seasonProductDataSeObject)
            console.log(seasonProductDataCpObject)

        
        
        setTotalData(prevState => [...prevState, seasonActualsDataCpObject , seasonProductDataCpObject, seasonProductDataSeObject])

       
       

    }
     console.log(totalData)

    return(
        <div>
            {getTotalData()}




        </div>

    )
}


export default JsonData