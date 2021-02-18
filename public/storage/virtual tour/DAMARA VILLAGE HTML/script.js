TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "id": "panorama_E7DB5D73_EDD8_1793_41EB_F5D27A89F870",
  "hfovMin": 60,
  "adjacentPanoramas": [
   {
    "backwardYaw": -87.18,
    "panorama": {
     "id": "panorama_E04DD70D_EDE8_1377_41CE_FD4C4BBD9B92",
     "hfovMin": 60,
     "adjacentPanoramas": [
      {
       "backwardYaw": 148.46,
       "panorama": {
        "id": "panorama_FD83FEE2_EE58_12AD_41E0_64C9DC16F171",
        "hfovMin": 60,
        "adjacentPanoramas": [
         {
          "backwardYaw": -119.68,
          "panorama": {
           "id": "panorama_FE42198B_EEE8_7F73_41E6_F91DD94D70D1",
           "hfovMin": 60,
           "adjacentPanoramas": [
            {
             "backwardYaw": 98.98,
             "panorama": "this.panorama_FD83FEE2_EE58_12AD_41E0_64C9DC16F171",
             "yaw": -119.68,
             "distance": 1,
             "class": "AdjacentPanorama"
            },
            {
             "backwardYaw": -19.43,
             "panorama": {
              "id": "panorama_FE5AA6EF_EEE8_12B3_41D5_FDBD6B96A6A9",
              "hfovMin": 60,
              "adjacentPanoramas": [
               {
                "backwardYaw": -4.15,
                "panorama": "this.panorama_FE42198B_EEE8_7F73_41E6_F91DD94D70D1",
                "yaw": -19.43,
                "distance": 1,
                "class": "AdjacentPanorama"
               }
              ],
              "class": "Panorama",
              "thumbnailUrl": "media/panorama_FE5AA6EF_EEE8_12B3_41D5_FDBD6B96A6A9_t.jpg",
              "hfov": 360,
              "pitch": 0,
              "partial": false,
              "frames": [
               {
                "class": "SphericPanoramaFrame",
                "thumbnailUrl": "media/panorama_FE5AA6EF_EEE8_12B3_41D5_FDBD6B96A6A9_t.jpg",
                "sphere": {
                 "levels": [
                  {
                   "height": 3217,
                   "width": 6434,
                   "url": "media/panorama_FE5AA6EF_EEE8_12B3_41D5_FDBD6B96A6A9_hq.jpeg",
                   "class": "ImageResourceLevel"
                  },
                  {
                   "height": 1608,
                   "width": 3217,
                   "url": "media/panorama_FE5AA6EF_EEE8_12B3_41D5_FDBD6B96A6A9.jpeg",
                   "class": "ImageResourceLevel"
                  }
                 ],
                 "class": "ImageResource"
                },
                "overlays": [
                 {
                  "useHandCursor": true,
                  "enabledInCardboard": true,
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                     "levels": [
                      {
                       "height": 109,
                       "width": 113,
                       "url": "media/panorama_FE5AA6EF_EEE8_12B3_41D5_FDBD6B96A6A9_0_HS_0_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": -19.43,
                    "hfov": 12.67,
                    "pitch": -3.55
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_FAE3FCD0_EE28_36ED_41D5_8968BFD3E58E",
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_FE42198B_EEE8_7F73_41E6_F91DD94D70D1, this.camera_20414EF9_2D1E_8467_419D_6EB7F00375E8); this.mainPlayList.set('selectedIndex', 5)",
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "rollOverDisplay": false,
                  "items": [
                   {
                    "yaw": -19.43,
                    "hfov": 12.67,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "levels": [
                      {
                       "height": 218,
                       "width": 226,
                       "url": "media/panorama_FE5AA6EF_EEE8_12B3_41D5_FDBD6B96A6A9_0_HS_0_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -3.55
                   }
                  ]
                 }
                ]
               }
              ],
              "label": "Room 2",
              "hfovMax": 120,
              "vfov": 180
             },
             "yaw": -4.15,
             "distance": 1,
             "class": "AdjacentPanorama"
            },
            {
             "backwardYaw": -164.07,
             "panorama": {
              "id": "panorama_FE47AD95_EEE8_1696_41E6_BCC610B56EED",
              "hfovMin": 60,
              "adjacentPanoramas": [
               {
                "backwardYaw": -79.39,
                "panorama": "this.panorama_FE42198B_EEE8_7F73_41E6_F91DD94D70D1",
                "yaw": -164.07,
                "distance": 1,
                "class": "AdjacentPanorama"
               }
              ],
              "class": "Panorama",
              "thumbnailUrl": "media/panorama_FE47AD95_EEE8_1696_41E6_BCC610B56EED_t.jpg",
              "hfov": 360,
              "pitch": 0,
              "partial": false,
              "frames": [
               {
                "class": "SphericPanoramaFrame",
                "thumbnailUrl": "media/panorama_FE47AD95_EEE8_1696_41E6_BCC610B56EED_t.jpg",
                "sphere": {
                 "levels": [
                  {
                   "height": 3217,
                   "width": 6434,
                   "url": "media/panorama_FE47AD95_EEE8_1696_41E6_BCC610B56EED_hq.jpeg",
                   "class": "ImageResourceLevel"
                  },
                  {
                   "height": 1608,
                   "width": 3217,
                   "url": "media/panorama_FE47AD95_EEE8_1696_41E6_BCC610B56EED.jpeg",
                   "class": "ImageResourceLevel"
                  }
                 ],
                 "class": "ImageResource"
                },
                "overlays": [
                 {
                  "useHandCursor": true,
                  "enabledInCardboard": true,
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                     "levels": [
                      {
                       "height": 122,
                       "width": 129,
                       "url": "media/panorama_FE47AD95_EEE8_1696_41E6_BCC610B56EED_0_HS_0_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": -164.07,
                    "hfov": 14.43,
                    "pitch": -2.18
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_FAC19AAD_EE28_12B7_419C_90C312FFDE4F",
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_FE42198B_EEE8_7F73_41E6_F91DD94D70D1, this.camera_2078CF13_2D1E_85AB_417B_9CAE6510129E); this.mainPlayList.set('selectedIndex', 5)",
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "rollOverDisplay": false,
                  "items": [
                   {
                    "yaw": -164.07,
                    "hfov": 14.43,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "levels": [
                      {
                       "height": 245,
                       "width": 258,
                       "url": "media/panorama_FE47AD95_EEE8_1696_41E6_BCC610B56EED_0_HS_0_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -2.18
                   }
                  ]
                 }
                ]
               }
              ],
              "label": "Room 1",
              "hfovMax": 120,
              "vfov": 180
             },
             "yaw": -79.39,
             "distance": 1,
             "class": "AdjacentPanorama"
            }
           ],
           "class": "Panorama",
           "thumbnailUrl": "media/panorama_FE42198B_EEE8_7F73_41E6_F91DD94D70D1_t.jpg",
           "hfov": 360,
           "pitch": 0,
           "partial": false,
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "thumbnailUrl": "media/panorama_FE42198B_EEE8_7F73_41E6_F91DD94D70D1_t.jpg",
             "sphere": {
              "levels": [
               {
                "height": 3217,
                "width": 6434,
                "url": "media/panorama_FE42198B_EEE8_7F73_41E6_F91DD94D70D1_hq.jpeg",
                "class": "ImageResourceLevel"
               },
               {
                "height": 1608,
                "width": 3217,
                "url": "media/panorama_FE42198B_EEE8_7F73_41E6_F91DD94D70D1.jpeg",
                "class": "ImageResourceLevel"
               }
              ],
              "class": "ImageResource"
             },
             "overlays": [
              {
               "useHandCursor": true,
               "enabledInCardboard": true,
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "image": {
                  "levels": [
                   {
                    "height": 123,
                    "width": 154,
                    "url": "media/panorama_FE42198B_EEE8_7F73_41E6_F91DD94D70D1_0_HS_0_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": -119.68,
                 "hfov": 15.17,
                 "pitch": -28.83
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_FB849CAC_EFD8_36B5_41C2_875BB4B64E98",
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_FD83FEE2_EE58_12AD_41E0_64C9DC16F171, this.camera_2090EF4F_2D1E_85BB_419B_BF667A2E922D); this.mainPlayList.set('selectedIndex', 3)",
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "rollOverDisplay": false,
               "items": [
                {
                 "yaw": -119.68,
                 "hfov": 15.17,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "levels": [
                   {
                    "height": 246,
                    "width": 309,
                    "url": "media/panorama_FE42198B_EEE8_7F73_41E6_F91DD94D70D1_0_HS_0_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -28.83
                }
               ]
              },
              {
               "useHandCursor": true,
               "enabledInCardboard": true,
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "image": {
                  "levels": [
                   {
                    "height": 122,
                    "width": 157,
                    "url": "media/panorama_FE42198B_EEE8_7F73_41E6_F91DD94D70D1_0_HS_1_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": -79.39,
                 "hfov": 17.61,
                 "pitch": -0.13
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_FB3CB9A0_EFD8_1EAD_41C7_A95D36874790",
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_FE47AD95_EEE8_1696_41E6_BCC610B56EED, this.camera_20865F66_2D1E_846D_41B6_90E4C4152D7E); this.mainPlayList.set('selectedIndex', 6)",
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "rollOverDisplay": false,
               "items": [
                {
                 "yaw": -79.39,
                 "hfov": 17.61,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "levels": [
                   {
                    "height": 244,
                    "width": 314,
                    "url": "media/panorama_FE42198B_EEE8_7F73_41E6_F91DD94D70D1_0_HS_1_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -0.13
                }
               ]
              },
              {
               "useHandCursor": true,
               "enabledInCardboard": true,
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "image": {
                  "levels": [
                   {
                    "height": 121,
                    "width": 140,
                    "url": "media/panorama_FE42198B_EEE8_7F73_41E6_F91DD94D70D1_0_HS_2_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": -4.15,
                 "hfov": 15.71,
                 "pitch": 2.36
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_FB906D52_EFD8_17ED_41EA_5B5DCCABC7B1",
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_FE5AA6EF_EEE8_12B3_41D5_FDBD6B96A6A9, this.camera_208ABF5A_2D1E_85A5_41B1_C529356B1C12); this.mainPlayList.set('selectedIndex', 7)",
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "rollOverDisplay": false,
               "items": [
                {
                 "yaw": -4.15,
                 "hfov": 15.71,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "levels": [
                   {
                    "height": 242,
                    "width": 281,
                    "url": "media/panorama_FE42198B_EEE8_7F73_41E6_F91DD94D70D1_0_HS_2_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": 2.36
                }
               ]
              }
             ]
            }
           ],
           "label": "2nd floor",
           "hfovMax": 120,
           "vfov": 180
          },
          "yaw": 98.98,
          "distance": 1,
          "class": "AdjacentPanorama"
         },
         {
          "backwardYaw": 34.99,
          "panorama": "this.panorama_E04DD70D_EDE8_1377_41CE_FD4C4BBD9B92",
          "yaw": 148.46,
          "distance": 1,
          "class": "AdjacentPanorama"
         },
         {
          "backwardYaw": -29.67,
          "panorama": {
           "id": "panorama_FEA62AAA_EEE9_F2BD_41E0_A138FFBCD1AB",
           "hfovMin": 60,
           "adjacentPanoramas": [
            {
             "backwardYaw": -66.04,
             "panorama": "this.panorama_FD83FEE2_EE58_12AD_41E0_64C9DC16F171",
             "yaw": -29.67,
             "distance": 1,
             "class": "AdjacentPanorama"
            }
           ],
           "class": "Panorama",
           "thumbnailUrl": "media/panorama_FEA62AAA_EEE9_F2BD_41E0_A138FFBCD1AB_t.jpg",
           "hfov": 360,
           "pitch": 0,
           "partial": false,
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "thumbnailUrl": "media/panorama_FEA62AAA_EEE9_F2BD_41E0_A138FFBCD1AB_t.jpg",
             "sphere": {
              "levels": [
               {
                "height": 3217,
                "width": 6434,
                "url": "media/panorama_FEA62AAA_EEE9_F2BD_41E0_A138FFBCD1AB_hq.jpeg",
                "class": "ImageResourceLevel"
               },
               {
                "height": 1608,
                "width": 3217,
                "url": "media/panorama_FEA62AAA_EEE9_F2BD_41E0_A138FFBCD1AB.jpeg",
                "class": "ImageResourceLevel"
               }
              ],
              "class": "ImageResource"
             },
             "overlays": [
              {
               "useHandCursor": true,
               "enabledInCardboard": true,
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "image": {
                  "levels": [
                   {
                    "height": 67,
                    "width": 78,
                    "url": "media/panorama_FEA62AAA_EEE9_F2BD_41E0_A138FFBCD1AB_0_HS_0_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": -29.67,
                 "hfov": 8.82,
                 "pitch": -0.25
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_FBE7788A_EFD8_1D72_41CD_8AB78903B6D9",
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_FD83FEE2_EE58_12AD_41E0_64C9DC16F171, this.camera_20CBCFB2_2D1E_84E5_41B9_74415A270F63); this.mainPlayList.set('selectedIndex', 3)",
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "rollOverDisplay": false,
               "items": [
                {
                 "yaw": -29.67,
                 "hfov": 8.82,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "levels": [
                   {
                    "height": 134,
                    "width": 157,
                    "url": "media/panorama_FEA62AAA_EEE9_F2BD_41E0_A138FFBCD1AB_0_HS_0_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -0.25
                }
               ]
              }
             ]
            }
           ],
           "label": "Pool",
           "hfovMax": 120,
           "vfov": 180
          },
          "yaw": -66.04,
          "distance": 1,
          "class": "AdjacentPanorama"
         }
        ],
        "class": "Panorama",
        "thumbnailUrl": "media/panorama_FD83FEE2_EE58_12AD_41E0_64C9DC16F171_t.jpg",
        "hfov": 360,
        "pitch": 0,
        "partial": false,
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "thumbnailUrl": "media/panorama_FD83FEE2_EE58_12AD_41E0_64C9DC16F171_t.jpg",
          "sphere": {
           "levels": [
            {
             "height": 3217,
             "width": 6434,
             "url": "media/panorama_FD83FEE2_EE58_12AD_41E0_64C9DC16F171_hq.jpeg",
             "class": "ImageResourceLevel"
            },
            {
             "height": 1608,
             "width": 3217,
             "url": "media/panorama_FD83FEE2_EE58_12AD_41E0_64C9DC16F171.jpeg",
             "class": "ImageResourceLevel"
            }
           ],
           "class": "ImageResource"
          },
          "overlays": [
           {
            "useHandCursor": true,
            "enabledInCardboard": true,
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "levels": [
                {
                 "height": 118,
                 "width": 97,
                 "url": "media/panorama_FD83FEE2_EE58_12AD_41E0_64C9DC16F171_0_HS_1_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "yaw": -66.04,
              "hfov": 10.94,
              "pitch": 0.35
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_FBDE1854_EFD8_3D95_41AA_585596182703",
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_FEA62AAA_EEE9_F2BD_41E0_A138FFBCD1AB, this.camera_206D5F37_2D1E_85EB_41AB_B8BCEA604B6C); this.mainPlayList.set('selectedIndex', 4)",
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "rollOverDisplay": false,
            "items": [
             {
              "yaw": -66.04,
              "hfov": 10.94,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "levels": [
                {
                 "height": 237,
                 "width": 195,
                 "url": "media/panorama_FD83FEE2_EE58_12AD_41E0_64C9DC16F171_0_HS_1_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": 0.35
             }
            ]
           },
           {
            "useHandCursor": true,
            "enabledInCardboard": true,
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "levels": [
                {
                 "height": 74,
                 "width": 80,
                 "url": "media/panorama_FD83FEE2_EE58_12AD_41E0_64C9DC16F171_0_HS_2_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "yaw": 98.98,
              "hfov": 9.05,
              "pitch": 0.9
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_FBC94B56_EFD8_1395_41E2_445EC287AF06",
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_FE42198B_EEE8_7F73_41E6_F91DD94D70D1, this.camera_207F2F1F_2D1E_85DB_41B8_ECA71925D3DD); this.mainPlayList.set('selectedIndex', 5)",
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "rollOverDisplay": false,
            "items": [
             {
              "yaw": 98.98,
              "hfov": 9.05,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "levels": [
                {
                 "height": 149,
                 "width": 161,
                 "url": "media/panorama_FD83FEE2_EE58_12AD_41E0_64C9DC16F171_0_HS_2_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": 0.9
             }
            ]
           },
           {
            "useHandCursor": true,
            "enabledInCardboard": true,
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "levels": [
                {
                 "height": 116,
                 "width": 143,
                 "url": "media/panorama_FD83FEE2_EE58_12AD_41E0_64C9DC16F171_0_HS_3_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "yaw": 148.46,
              "hfov": 16.07,
              "pitch": 3.39
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_FBBB6462_EFD8_75AD_41D5_8B4EED2519B0",
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_E04DD70D_EDE8_1377_41CE_FD4C4BBD9B92, this.camera_2074CF2B_2D1E_85FB_41C5_B06090CD3635); this.mainPlayList.set('selectedIndex', 1)",
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "rollOverDisplay": false,
            "items": [
             {
              "yaw": 148.46,
              "hfov": 16.07,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "levels": [
                {
                 "height": 232,
                 "width": 287,
                 "url": "media/panorama_FD83FEE2_EE58_12AD_41E0_64C9DC16F171_0_HS_3_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": 3.39
             }
            ]
           }
          ]
         }
        ],
        "label": "1st floor",
        "hfovMax": 120,
        "vfov": 180
       },
       "yaw": 34.99,
       "distance": 1,
       "class": "AdjacentPanorama"
      },
      {
       "backwardYaw": 2.18,
       "panorama": "this.panorama_E7DB5D73_EDD8_1793_41EB_F5D27A89F870",
       "yaw": -87.18,
       "distance": 1,
       "class": "AdjacentPanorama"
      },
      {
       "backwardYaw": 33.88,
       "panorama": {
        "id": "panorama_E338B258_EDF8_2D9E_41D2_615F955E0183",
        "hfovMin": 64,
        "adjacentPanoramas": [
         {
          "backwardYaw": 0.4,
          "panorama": "this.panorama_E04DD70D_EDE8_1377_41CE_FD4C4BBD9B92",
          "yaw": 33.88,
          "distance": 1,
          "class": "AdjacentPanorama"
         }
        ],
        "class": "Panorama",
        "thumbnailUrl": "media/panorama_E338B258_EDF8_2D9E_41D2_615F955E0183_t.jpg",
        "hfov": 360,
        "pitch": 0,
        "partial": false,
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "thumbnailUrl": "media/panorama_E338B258_EDF8_2D9E_41D2_615F955E0183_t.jpg",
          "sphere": {
           "levels": [
            {
             "height": 3217,
             "width": 6434,
             "url": "media/panorama_E338B258_EDF8_2D9E_41D2_615F955E0183_hq.jpeg",
             "class": "ImageResourceLevel"
            },
            {
             "height": 1608,
             "width": 3217,
             "url": "media/panorama_E338B258_EDF8_2D9E_41D2_615F955E0183.jpeg",
             "class": "ImageResourceLevel"
            }
           ],
           "class": "ImageResource"
          },
          "overlays": [
           {
            "useHandCursor": true,
            "enabledInCardboard": true,
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "levels": [
                {
                 "height": 122,
                 "width": 167,
                 "url": "media/panorama_E338B258_EDF8_2D9E_41D2_615F955E0183_0_HS_0_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "yaw": 33.88,
              "hfov": 18.66,
              "pitch": -4.56
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_FBDD34F5_EFD8_3697_41EA_814B319D16FF",
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_E04DD70D_EDE8_1377_41CE_FD4C4BBD9B92, this.camera_2044CF05_2D1E_85AF_41C3_E17ACA11D052); this.mainPlayList.set('selectedIndex', 1)",
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "rollOverDisplay": false,
            "items": [
             {
              "yaw": 33.88,
              "hfov": 18.66,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "levels": [
                {
                 "height": 244,
                 "width": 334,
                 "url": "media/panorama_E338B258_EDF8_2D9E_41D2_615F955E0183_0_HS_0_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -4.56
             }
            ]
           }
          ]
         }
        ],
        "label": "Office",
        "hfovMax": 120,
        "vfov": 180
       },
       "yaw": 0.4,
       "distance": 1,
       "class": "AdjacentPanorama"
      }
     ],
     "class": "Panorama",
     "thumbnailUrl": "media/panorama_E04DD70D_EDE8_1377_41CE_FD4C4BBD9B92_t.jpg",
     "hfov": 360,
     "pitch": 0,
     "partial": false,
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_E04DD70D_EDE8_1377_41CE_FD4C4BBD9B92_t.jpg",
       "sphere": {
        "levels": [
         {
          "height": 3217,
          "width": 6434,
          "url": "media/panorama_E04DD70D_EDE8_1377_41CE_FD4C4BBD9B92_hq.jpeg",
          "class": "ImageResourceLevel"
         },
         {
          "height": 1608,
          "width": 3217,
          "url": "media/panorama_E04DD70D_EDE8_1377_41CE_FD4C4BBD9B92.jpeg",
          "class": "ImageResourceLevel"
         }
        ],
        "class": "ImageResource"
       },
       "overlays": [
        {
         "useHandCursor": true,
         "enabledInCardboard": true,
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "levels": [
             {
              "height": 42,
              "width": 76,
              "url": "media/panorama_E04DD70D_EDE8_1377_41CE_FD4C4BBD9B92_0_HS_3_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "yaw": 0.4,
           "hfov": 8.55,
           "pitch": 1.18
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_FA5F62DA_EFE8_329D_41E4_F4134D35D8E7",
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_E338B258_EDF8_2D9E_41D2_615F955E0183, this.camera_20DDCF99_2D1E_84DA_41C1_6C277C35D2C7); this.mainPlayList.set('selectedIndex', 2)",
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "rollOverDisplay": false,
         "items": [
          {
           "yaw": 0.4,
           "hfov": 8.55,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 85,
              "width": 152,
              "url": "media/panorama_E04DD70D_EDE8_1377_41CE_FD4C4BBD9B92_0_HS_3_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": 1.18
          }
         ]
        },
        {
         "useHandCursor": true,
         "enabledInCardboard": true,
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "levels": [
             {
              "height": 41,
              "width": 77,
              "url": "media/panorama_E04DD70D_EDE8_1377_41CE_FD4C4BBD9B92_0_HS_4_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "yaw": -87.18,
           "hfov": 8.66,
           "pitch": 0.97
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_FA23240E_EFE8_1575_41D9_B43FD51211E2",
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_E7DB5D73_EDD8_1793_41EB_F5D27A89F870, this.camera_20AE6F87_2D1E_84AB_41A8_8DB742A5BCE4); this.mainPlayList.set('selectedIndex', 0)",
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "rollOverDisplay": false,
         "items": [
          {
           "yaw": -87.18,
           "hfov": 8.66,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 83,
              "width": 154,
              "url": "media/panorama_E04DD70D_EDE8_1377_41CE_FD4C4BBD9B92_0_HS_4_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": 0.97
          }
         ]
        },
        {
         "useHandCursor": true,
         "enabledInCardboard": true,
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "levels": [
             {
              "height": 41,
              "width": 76,
              "url": "media/panorama_E04DD70D_EDE8_1377_41CE_FD4C4BBD9B92_0_HS_5_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "yaw": 34.99,
           "hfov": 8.55,
           "pitch": 1.33
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_FA2BF1EE_EFD8_2EB5_41C9_B8D9128F7243",
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_FD83FEE2_EE58_12AD_41E0_64C9DC16F171, this.camera_20B3EF72_2D1E_8465_41B0_B056984CB039); this.mainPlayList.set('selectedIndex', 3)",
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "rollOverDisplay": false,
         "items": [
          {
           "yaw": 34.99,
           "hfov": 8.55,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 83,
              "width": 152,
              "url": "media/panorama_E04DD70D_EDE8_1377_41CE_FD4C4BBD9B92_0_HS_5_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": 1.33
          }
         ]
        }
       ]
      }
     ],
     "label": "Front Office",
     "hfovMax": 120,
     "vfov": 180
    },
    "yaw": 2.18,
    "distance": 1,
    "class": "AdjacentPanorama"
   }
  ],
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_E7DB5D73_EDD8_1793_41EB_F5D27A89F870_t.jpg",
  "hfov": 360,
  "pitch": 0,
  "partial": false,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_E7DB5D73_EDD8_1793_41EB_F5D27A89F870_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_E7DB5D73_EDD8_1793_41EB_F5D27A89F870_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_E7DB5D73_EDD8_1793_41EB_F5D27A89F870.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "overlays": [
     {
      "useHandCursor": true,
      "enabledInCardboard": true,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "levels": [
          {
           "height": 90,
           "width": 99,
           "url": "media/panorama_E7DB5D73_EDD8_1793_41EB_F5D27A89F870_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 2.18,
        "hfov": 11.14,
        "pitch": -2.81
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_FA510E8B_EFE8_7573_41C9_D18149CCDCA7",
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_E04DD70D_EDE8_1377_41CE_FD4C4BBD9B92, this.camera_20645F43_2D1E_85AB_41AE_4F4025327DBF); this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 2.18,
        "hfov": 11.14,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 181,
           "width": 199,
           "url": "media/panorama_E7DB5D73_EDD8_1793_41EB_F5D27A89F870_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -2.81
       }
      ]
     }
    ]
   }
  ],
  "label": "Gate",
  "hfovMax": 120,
  "vfov": 180
 },
 {
  "buttonZoomIn": {
   "id": "IconButton_FFE1794F_EED8_7FF3_41DD_3EECABEB5379",
   "paddingRight": 0,
   "class": "IconButton",
   "mode": "push",
   "horizontalAlign": "center",
   "minHeight": 0,
   "shadow": false,
   "borderRadius": 0,
   "backgroundOpacity": 0,
   "paddingLeft": 0,
   "minWidth": 0,
   "paddingBottom": 0,
   "verticalAlign": "middle",
   "rollOverIconURL": "skin/IconButton_FFE1794F_EED8_7FF3_41DD_3EECABEB5379_rollover.png",
   "cursor": "hand",
   "width": 40,
   "height": 40,
   "paddingTop": 0,
   "borderSize": 0,
   "transparencyActive": true,
   "iconURL": "skin/IconButton_FFE1794F_EED8_7FF3_41DD_3EECABEB5379.png",
   "pressedIconURL": "skin/IconButton_FFE1794F_EED8_7FF3_41DD_3EECABEB5379_pressed.png"
  },
  "buttonMoveLeft": {
   "id": "IconButton_FFE0794C_EED8_7FF6_41D7_3545395DA128",
   "paddingRight": 0,
   "class": "IconButton",
   "mode": "push",
   "horizontalAlign": "center",
   "minHeight": 0,
   "shadow": false,
   "borderRadius": 0,
   "backgroundOpacity": 0,
   "paddingLeft": 0,
   "minWidth": 0,
   "paddingBottom": 0,
   "verticalAlign": "middle",
   "rollOverIconURL": "skin/IconButton_FFE0794C_EED8_7FF6_41D7_3545395DA128_rollover.png",
   "cursor": "hand",
   "width": 40,
   "height": 40,
   "paddingTop": 0,
   "borderSize": 0,
   "transparencyActive": true,
   "iconURL": "skin/IconButton_FFE0794C_EED8_7FF6_41D7_3545395DA128.png",
   "pressedIconURL": "skin/IconButton_FFE0794C_EED8_7FF6_41D7_3545395DA128_pressed.png"
  },
  "mouseControlMode": "drag_acceleration",
  "buttonZoomOut": {
   "id": "IconButton_FFE0494C_EED8_7FF5_41E7_554503EA6305",
   "paddingRight": 0,
   "class": "IconButton",
   "mode": "push",
   "horizontalAlign": "center",
   "minHeight": 0,
   "shadow": false,
   "borderRadius": 0,
   "backgroundOpacity": 0,
   "paddingLeft": 0,
   "minWidth": 0,
   "paddingBottom": 0,
   "verticalAlign": "middle",
   "rollOverIconURL": "skin/IconButton_FFE0494C_EED8_7FF5_41E7_554503EA6305_rollover.png",
   "cursor": "hand",
   "width": 40,
   "height": 40,
   "paddingTop": 0,
   "borderSize": 0,
   "transparencyActive": true,
   "iconURL": "skin/IconButton_FFE0494C_EED8_7FF5_41E7_554503EA6305.png",
   "pressedIconURL": "skin/IconButton_FFE0494C_EED8_7FF5_41E7_554503EA6305_pressed.png"
  },
  "touchControlMode": "drag_rotation",
  "id": "MainViewerPanoramaPlayer",
  "preloadEnabled": false,
  "buttonMoveUp": {
   "id": "IconButton_FFE0194D_EED8_7FF7_41EA_AAE137285F28",
   "paddingRight": 0,
   "class": "IconButton",
   "mode": "push",
   "horizontalAlign": "center",
   "minHeight": 0,
   "shadow": false,
   "borderRadius": 0,
   "backgroundOpacity": 0,
   "paddingLeft": 0,
   "minWidth": 0,
   "paddingBottom": 0,
   "verticalAlign": "middle",
   "rollOverIconURL": "skin/IconButton_FFE0194D_EED8_7FF7_41EA_AAE137285F28_rollover.png",
   "cursor": "hand",
   "width": 40,
   "height": 40,
   "paddingTop": 0,
   "borderSize": 0,
   "transparencyActive": true,
   "iconURL": "skin/IconButton_FFE0194D_EED8_7FF7_41EA_AAE137285F28.png",
   "pressedIconURL": "skin/IconButton_FFE0194D_EED8_7FF7_41EA_AAE137285F28_pressed.png"
  },
  "gyroscopeVerticalDraggingEnabled": true,
  "viewerArea": "this.MainViewer",
  "buttonMoveRight": {
   "id": "IconButton_FFE2B94E_EED8_7FF5_41E0_466A95E9A930",
   "paddingRight": 0,
   "class": "IconButton",
   "mode": "push",
   "horizontalAlign": "center",
   "minHeight": 0,
   "shadow": false,
   "borderRadius": 0,
   "backgroundOpacity": 0,
   "paddingLeft": 0,
   "minWidth": 0,
   "paddingBottom": 0,
   "verticalAlign": "middle",
   "rollOverIconURL": "skin/IconButton_FFE2B94E_EED8_7FF5_41E0_466A95E9A930_rollover.png",
   "cursor": "hand",
   "width": 40,
   "height": 40,
   "paddingTop": 0,
   "borderSize": 0,
   "transparencyActive": true,
   "iconURL": "skin/IconButton_FFE2B94E_EED8_7FF5_41E0_466A95E9A930.png",
   "pressedIconURL": "skin/IconButton_FFE2B94E_EED8_7FF5_41E0_466A95E9A930_pressed.png"
  },
  "class": "PanoramaPlayer",
  "displayPlaybackBar": true,
  "buttonMoveDown": {
   "id": "IconButton_FAF0A4F1_EE78_16AF_41B4_0C57CEBB87B2",
   "paddingRight": 0,
   "class": "IconButton",
   "mode": "push",
   "horizontalAlign": "center",
   "minHeight": 0,
   "shadow": false,
   "borderRadius": 0,
   "backgroundOpacity": 0,
   "paddingLeft": 0,
   "minWidth": 0,
   "paddingBottom": 0,
   "verticalAlign": "middle",
   "rollOverIconURL": "skin/IconButton_FAF0A4F1_EE78_16AF_41B4_0C57CEBB87B2_rollover.png",
   "cursor": "hand",
   "width": 40,
   "height": 40,
   "paddingTop": 0,
   "borderSize": 0,
   "transparencyActive": true,
   "iconURL": "skin/IconButton_FAF0A4F1_EE78_16AF_41B4_0C57CEBB87B2.png",
   "pressedIconURL": "skin/IconButton_FAF0A4F1_EE78_16AF_41B4_0C57CEBB87B2_pressed.png"
  }
 },
 {
  "idleSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -56.37,
   "hfov": 100,
   "pitch": 1.13
  },
  "automaticZoomSpeed": 10,
  "timeToIdle": 3000,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 3.72,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 3.72,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 3.72,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_E7DB5D73_EDD8_1793_41EB_F5D27A89F870_camera",
  "automaticRotationSpeed": 120
 },
 "this.panorama_E04DD70D_EDE8_1377_41CE_FD4C4BBD9B92",
 {
  "idleSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 2.05,
   "hfov": 100,
   "pitch": -3.22
  },
  "automaticZoomSpeed": 10,
  "timeToIdle": 3000,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 3.72,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 3.72,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 3.72,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_E04DD70D_EDE8_1377_41CE_FD4C4BBD9B92_camera"
 },
 "this.panorama_E338B258_EDF8_2D9E_41D2_615F955E0183",
 {
  "idleSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -134.04,
   "hfov": 100,
   "pitch": -0.7
  },
  "automaticZoomSpeed": 10,
  "timeToIdle": 3000,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 3.72,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 3.72,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 3.72,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_E338B258_EDF8_2D9E_41D2_615F955E0183_camera"
 },
 "this.panorama_FD83FEE2_EE58_12AD_41E0_64C9DC16F171",
 {
  "idleSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -65.87,
   "hfov": 100,
   "pitch": -2.74
  },
  "automaticZoomSpeed": 10,
  "timeToIdle": 3000,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_FD83FEE2_EE58_12AD_41E0_64C9DC16F171_camera"
 },
 "this.panorama_FEA62AAA_EEE9_F2BD_41E0_A138FFBCD1AB",
 {
  "idleSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -1.75,
   "hfov": 100,
   "pitch": 0.3
  },
  "automaticZoomSpeed": 10,
  "timeToIdle": 3000,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 3.72,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 3.72,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 3.72,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_FEA62AAA_EEE9_F2BD_41E0_A138FFBCD1AB_camera"
 },
 "this.panorama_FE42198B_EEE8_7F73_41E6_F91DD94D70D1",
 {
  "idleSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -57,
   "hfov": 100,
   "pitch": -0.56
  },
  "automaticZoomSpeed": 10,
  "timeToIdle": 3000,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 3.72,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 3.72,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 3.72,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_FE42198B_EEE8_7F73_41E6_F91DD94D70D1_camera"
 },
 "this.panorama_FE47AD95_EEE8_1696_41E6_BCC610B56EED",
 {
  "idleSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 12.38,
   "hfov": 100,
   "pitch": -5.65
  },
  "automaticZoomSpeed": 10,
  "timeToIdle": 3000,
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 3.72,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 3.72,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 3.72,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_FE47AD95_EEE8_1696_41E6_BCC610B56EED_camera"
 },
 "this.panorama_FE5AA6EF_EEE8_12B3_41D5_FDBD6B96A6A9",
 {
  "idleSequence": {
   "restartMovementOnUserInteraction": false,
   "id": "sequence_207C9337_2CF6_8252_41AA_8AA731FD2868",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 3.72,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 3.72,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 3.72,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 121.29,
   "hfov": 100,
   "pitch": -0.33
  },
  "automaticZoomSpeed": 10,
  "timeToIdle": 3000,
  "class": "PanoramaCamera",
  "initialSequence": "this.sequence_207C9337_2CF6_8252_41AA_8AA731FD2868",
  "id": "panorama_FE5AA6EF_EEE8_12B3_41D5_FDBD6B96A6A9_camera"
 },
 {
  "items": [
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "camera": "this.panorama_E7DB5D73_EDD8_1793_41EB_F5D27A89F870_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_E7DB5D73_EDD8_1793_41EB_F5D27A89F870"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "camera": "this.panorama_E04DD70D_EDE8_1377_41CE_FD4C4BBD9B92_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_E04DD70D_EDE8_1377_41CE_FD4C4BBD9B92"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "camera": "this.panorama_E338B258_EDF8_2D9E_41D2_615F955E0183_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_E338B258_EDF8_2D9E_41D2_615F955E0183"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "camera": "this.panorama_FD83FEE2_EE58_12AD_41E0_64C9DC16F171_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FD83FEE2_EE58_12AD_41E0_64C9DC16F171"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "camera": "this.panorama_FEA62AAA_EEE9_F2BD_41E0_A138FFBCD1AB_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FEA62AAA_EEE9_F2BD_41E0_A138FFBCD1AB"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "camera": "this.panorama_FE42198B_EEE8_7F73_41E6_F91DD94D70D1_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FE42198B_EEE8_7F73_41E6_F91DD94D70D1"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "camera": "this.panorama_FE47AD95_EEE8_1696_41E6_BCC610B56EED_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FE47AD95_EEE8_1696_41E6_BCC610B56EED"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 0)",
    "camera": "this.panorama_FE5AA6EF_EEE8_12B3_41D5_FDBD6B96A6A9_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FE5AA6EF_EEE8_12B3_41D5_FDBD6B96A6A9"
   }
  ],
  "id": "mainPlayList",
  "class": "PlayList"
 },
 {
  "items": [
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_FE4672A6_EE68_32B5_4184_D4434ABAF23A_playlist, 0, 1)",
    "camera": "this.panorama_E7DB5D73_EDD8_1793_41EB_F5D27A89F870_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_E7DB5D73_EDD8_1793_41EB_F5D27A89F870"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_FE4672A6_EE68_32B5_4184_D4434ABAF23A_playlist, 1, 2)",
    "camera": "this.panorama_E04DD70D_EDE8_1377_41CE_FD4C4BBD9B92_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_E04DD70D_EDE8_1377_41CE_FD4C4BBD9B92"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_FE4672A6_EE68_32B5_4184_D4434ABAF23A_playlist, 2, 3)",
    "camera": "this.panorama_E338B258_EDF8_2D9E_41D2_615F955E0183_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_E338B258_EDF8_2D9E_41D2_615F955E0183"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_FE4672A6_EE68_32B5_4184_D4434ABAF23A_playlist, 3, 4)",
    "camera": "this.panorama_FD83FEE2_EE58_12AD_41E0_64C9DC16F171_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FD83FEE2_EE58_12AD_41E0_64C9DC16F171"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_FE4672A6_EE68_32B5_4184_D4434ABAF23A_playlist, 4, 5)",
    "camera": "this.panorama_FEA62AAA_EEE9_F2BD_41E0_A138FFBCD1AB_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FEA62AAA_EEE9_F2BD_41E0_A138FFBCD1AB"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_FE4672A6_EE68_32B5_4184_D4434ABAF23A_playlist, 5, 6)",
    "camera": "this.panorama_FE42198B_EEE8_7F73_41E6_F91DD94D70D1_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FE42198B_EEE8_7F73_41E6_F91DD94D70D1"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_FE4672A6_EE68_32B5_4184_D4434ABAF23A_playlist, 6, 7)",
    "camera": "this.panorama_FE47AD95_EEE8_1696_41E6_BCC610B56EED_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FE47AD95_EEE8_1696_41E6_BCC610B56EED"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_FE4672A6_EE68_32B5_4184_D4434ABAF23A_playlist, 7, 0)",
    "camera": "this.panorama_FE5AA6EF_EEE8_12B3_41D5_FDBD6B96A6A9_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FE5AA6EF_EEE8_12B3_41D5_FDBD6B96A6A9"
   }
  ],
  "id": "ThumbnailList_FE4672A6_EE68_32B5_4184_D4434ABAF23A_playlist",
  "class": "PlayList"
 },
 {
  "easing": "linear",
  "id": "effect_FD65328D_EE68_2D77_41D7_1E79CFF7B7A3",
  "duration": 500,
  "class": "FadeInEffect"
 },
 {
  "easing": "linear",
  "id": "effect_FD65028D_EE68_2D77_41B6_C98AFC7A9C95",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 {
  "idleSequence": {
   "restartMovementOnUserInteraction": false,
   "id": "sequence_20415EF9_2D1E_8467_41C1_5CF7E95B5979",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 3.72,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 3.72,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 3.72,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 175.85,
   "hfov": 100,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "timeToIdle": 3000,
  "class": "PanoramaCamera",
  "initialSequence": "this.sequence_20415EF9_2D1E_8467_41C1_5CF7E95B5979",
  "id": "camera_20414EF9_2D1E_8467_419D_6EB7F00375E8"
 },
 {
  "idleSequence": {
   "restartMovementOnUserInteraction": false,
   "id": "sequence_2044DF05_2D1E_85AF_41BD_8A46829F8F49",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 3.72,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 3.72,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 3.72,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -179.6,
   "hfov": 100,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "timeToIdle": 3000,
  "class": "PanoramaCamera",
  "initialSequence": "this.sequence_2044DF05_2D1E_85AF_41BD_8A46829F8F49",
  "id": "camera_2044CF05_2D1E_85AF_41C3_E17ACA11D052"
 },
 {
  "idleSequence": {
   "restartMovementOnUserInteraction": false,
   "id": "sequence_2078DF14_2D1E_85AD_41C1_9A9E2441243B",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 3.72,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 3.72,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 3.72,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 100.61,
   "hfov": 100,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "timeToIdle": 3000,
  "class": "PanoramaCamera",
  "initialSequence": "this.sequence_2078DF14_2D1E_85AD_41C1_9A9E2441243B",
  "id": "camera_2078CF13_2D1E_85AB_417B_9CAE6510129E"
 },
 {
  "idleSequence": {
   "restartMovementOnUserInteraction": false,
   "id": "sequence_207F3F1F_2D1E_85DA_41C6_12FB453D4E89",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 3.72,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 3.72,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 3.72,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 60.32,
   "hfov": 100,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "timeToIdle": 3000,
  "class": "PanoramaCamera",
  "initialSequence": "this.sequence_207F3F1F_2D1E_85DA_41C6_12FB453D4E89",
  "id": "camera_207F2F1F_2D1E_85DB_41B8_ECA71925D3DD"
 },
 {
  "idleSequence": {
   "restartMovementOnUserInteraction": false,
   "id": "sequence_2074DF2B_2D1E_85FA_41C5_09836B3F9EB8",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 3.72,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 3.72,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 3.72,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -145.01,
   "hfov": 100,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "timeToIdle": 3000,
  "class": "PanoramaCamera",
  "initialSequence": "this.sequence_2074DF2B_2D1E_85FA_41C5_09836B3F9EB8",
  "id": "camera_2074CF2B_2D1E_85FB_41C5_B06090CD3635"
 },
 {
  "idleSequence": {
   "restartMovementOnUserInteraction": false,
   "id": "sequence_206D0F37_2D1E_85EB_41C0_1D0D437D25AB",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 3.72,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 3.72,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 3.72,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 150.33,
   "hfov": 100,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "timeToIdle": 3000,
  "class": "PanoramaCamera",
  "initialSequence": "this.sequence_206D0F37_2D1E_85EB_41C0_1D0D437D25AB",
  "id": "camera_206D5F37_2D1E_85EB_41AB_B8BCEA604B6C"
 },
 {
  "idleSequence": {
   "restartMovementOnUserInteraction": false,
   "id": "sequence_20647F43_2D1E_85AB_41B5_7370DFA73A7A",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 3.72,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 3.72,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 3.72,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 92.82,
   "hfov": 100,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "timeToIdle": 3000,
  "class": "PanoramaCamera",
  "initialSequence": "this.sequence_20647F43_2D1E_85AB_41B5_7370DFA73A7A",
  "id": "camera_20645F43_2D1E_85AB_41AE_4F4025327DBF"
 },
 {
  "idleSequence": {
   "restartMovementOnUserInteraction": false,
   "id": "sequence_20909F4F_2D1E_85BB_41B7_857CFA0A1ABE",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -81.02,
   "hfov": 100,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "timeToIdle": 3000,
  "class": "PanoramaCamera",
  "initialSequence": "this.sequence_20909F4F_2D1E_85BB_41B7_857CFA0A1ABE",
  "id": "camera_2090EF4F_2D1E_85BB_419B_BF667A2E922D"
 },
 {
  "idleSequence": {
   "restartMovementOnUserInteraction": false,
   "id": "sequence_208A4F5A_2D1E_845A_41B9_B69B14C5061E",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 3.72,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 3.72,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 3.72,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 160.57,
   "hfov": 100,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "timeToIdle": 3000,
  "class": "PanoramaCamera",
  "initialSequence": "this.sequence_208A4F5A_2D1E_845A_41B9_B69B14C5061E",
  "id": "camera_208ABF5A_2D1E_85A5_41B1_C529356B1C12"
 },
 {
  "idleSequence": {
   "restartMovementOnUserInteraction": false,
   "id": "sequence_20866F66_2D1E_846D_41C2_2C0A97562FF2",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 3.72,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 3.72,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 3.72,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 15.93,
   "hfov": 100,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "timeToIdle": 3000,
  "class": "PanoramaCamera",
  "initialSequence": "this.sequence_20866F66_2D1E_846D_41C2_2C0A97562FF2",
  "id": "camera_20865F66_2D1E_846D_41B6_90E4C4152D7E"
 },
 {
  "idleSequence": {
   "restartMovementOnUserInteraction": false,
   "id": "sequence_20B3FF72_2D1E_8465_41AB_921D99753199",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -31.54,
   "hfov": 100,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "timeToIdle": 3000,
  "class": "PanoramaCamera",
  "initialSequence": "this.sequence_20B3FF72_2D1E_8465_41AB_921D99753199",
  "id": "camera_20B3EF72_2D1E_8465_41B0_B056984CB039"
 },
 {
  "idleSequence": {
   "restartMovementOnUserInteraction": false,
   "id": "sequence_20AE1F88_2D1E_84A5_41A8_AD9F3FB65456",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 3.72,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 3.72,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 3.72,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -177.82,
   "hfov": 100,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "timeToIdle": 3000,
  "class": "PanoramaCamera",
  "initialSequence": "this.sequence_20AE1F88_2D1E_84A5_41A8_AD9F3FB65456",
  "id": "camera_20AE6F87_2D1E_84AB_41A8_8DB742A5BCE4",
  "automaticRotationSpeed": 120
 },
 {
  "idleSequence": {
   "restartMovementOnUserInteraction": false,
   "id": "sequence_20DDFF9E_2D1E_84DD_41C0_AD10BBB943FD",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 3.72,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 3.72,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 3.72,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -146.12,
   "hfov": 100,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "timeToIdle": 3000,
  "class": "PanoramaCamera",
  "initialSequence": "this.sequence_20DDFF9E_2D1E_84DD_41C0_AD10BBB943FD",
  "id": "camera_20DDCF99_2D1E_84DA_41C1_6C277C35D2C7"
 },
 {
  "idleSequence": {
   "restartMovementOnUserInteraction": false,
   "id": "sequence_20CBFFB2_2D1E_84E5_41B1_2D6DE3518725",
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 113.96,
   "hfov": 100,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "timeToIdle": 3000,
  "class": "PanoramaCamera",
  "initialSequence": "this.sequence_20CBFFB2_2D1E_84E5_41B1_2D6DE3518725",
  "id": "camera_20CBCFB2_2D1E_84E5_41B9_74415A270F63"
 }
], "children": [
 {
  "transitionMode": "blending",
  "toolTipTextShadowBlurRadius": 3,
  "paddingRight": 0,
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarBorderRadius": 0,
  "playbackBarProgressBorderColor": "#000000",
  "toolTipPaddingBottom": 4,
  "paddingLeft": 0,
  "shadow": false,
  "paddingBottom": 0,
  "playbackBarHeadBorderRadius": 0,
  "toolTipOpacity": 1,
  "toolTipShadowHorizontalLength": 0,
  "progressLeft": 0,
  "toolTipTextShadowOpacity": 0,
  "width": "100%",
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarProgressOpacity": 1,
  "paddingTop": 0,
  "toolTipShadowSpread": 0,
  "toolTipShadowVerticalLength": 0,
  "height": "100%",
  "playbackBarBorderSize": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipPaddingRight": 6,
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarBackgroundOpacity": 1,
  "playbackBarLeft": 0,
  "toolTipFontStyle": "normal",
  "playbackBarHeadHeight": 15,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarHeadBorderSize": 0,
  "playbackBarHeadShadowColor": "#000000",
  "progressRight": 0,
  "progressOpacity": 1,
  "progressBarBorderColor": "#000000",
  "toolTipFontColor": "#606060",
  "progressBarBackgroundColorDirection": "vertical",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "toolTipFontWeight": "normal",
  "top": 0,
  "toolTipFontFamily": "Arial",
  "id": "MainViewer",
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarHeadOpacity": 1,
  "playbackBarHeadShadow": true,
  "toolTipBorderSize": 1,
  "progressBackgroundColorDirection": "vertical",
  "class": "ViewerArea",
  "toolTipPaddingTop": 4,
  "progressBackgroundOpacity": 1,
  "minHeight": 50,
  "playbackBarBottom": 5,
  "toolTipPaddingLeft": 6,
  "toolTipShadowOpacity": 1,
  "playbackBarOpacity": 1,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "borderRadius": 0,
  "progressBorderColor": "#000000",
  "progressBarOpacity": 1,
  "minWidth": 100,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBottom": 0,
  "progressHeight": 10,
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarHeight": 10,
  "toolTipBorderRadius": 3,
  "toolTipFontSize": 12,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressBorderSize": 0,
  "playbackBarHeadWidth": 6,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarProgressBorderSize": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "toolTipTextShadowColor": "#000000",
  "left": 0,
  "playbackBarRight": 0,
  "progressBorderRadius": 0,
  "progressBarBorderRadius": 0,
  "toolTipShadowBlurRadius": 3,
  "borderSize": 0,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "progressBarBorderSize": 0,
  "playbackBarProgressBorderRadius": 0,
  "playbackBarHeadShadowOpacity": 0.7,
  "toolTipBorderColor": "#767676",
  "toolTipShadowColor": "#333333"
 },
 {
  "itemThumbnailScaleMode": "fit_outside",
  "bottom": "15.31%",
  "itemPaddingRight": 3,
  "id": "ThumbnailList_FE4672A6_EE68_32B5_4184_D4434ABAF23A",
  "gap": 10,
  "itemBackgroundOpacity": 0,
  "itemHorizontalAlign": "center",
  "scrollBarColor": "#FFFFFF",
  "rollOverItemLabelFontWeight": "normal",
  "itemLabelFontColor": "#FFFFFF",
  "paddingRight": 20,
  "scrollBarOpacity": 0.5,
  "class": "ThumbnailList",
  "horizontalAlign": "left",
  "itemBorderRadius": 0,
  "minHeight": 20,
  "itemPaddingTop": 3,
  "visible": false,
  "itemThumbnailBorderRadius": 50,
  "itemBackgroundColorDirection": "vertical",
  "shadow": false,
  "layout": "vertical",
  "borderRadius": 5,
  "itemMode": "normal",
  "backgroundOpacity": 0,
  "paddingLeft": 20,
  "itemPaddingLeft": 3,
  "itemLabelPosition": "bottom",
  "minWidth": 20,
  "paddingBottom": 10,
  "itemThumbnailShadowOpacity": 0.54,
  "rollOverItemBackgroundOpacity": 0,
  "itemBackgroundColorRatios": [],
  "itemBackgroundColor": [],
  "itemThumbnailShadowBlurRadius": 8,
  "itemOpacity": 1,
  "itemLabelFontWeight": "normal",
  "itemLabelFontStyle": "normal",
  "scrollBarVisible": "rollOver",
  "selectedItemLabelFontColor": "#009900",
  "scrollBarWidth": 10,
  "itemThumbnailShadow": true,
  "itemVerticalAlign": "middle",
  "width": 131,
  "paddingTop": 10,
  "height": "61.244%",
  "itemPaddingBottom": 3,
  "itemLabelFontSize": 14,
  "itemThumbnailOpacity": 1,
  "itemLabelGap": 9,
  "playList": "this.ThumbnailList_FE4672A6_EE68_32B5_4184_D4434ABAF23A_playlist",
  "itemThumbnailShadowVerticalLength": 3,
  "itemThumbnailShadowSpread": 1,
  "scrollBarMargin": 2,
  "itemThumbnailWidth": 75,
  "itemLabelTextDecoration": "none",
  "itemThumbnailShadowColor": "#000000",
  "verticalAlign": "top",
  "itemLabelHorizontalAlign": "center",
  "selectedItemLabelFontWeight": "bold",
  "borderSize": 0,
  "right": "1.19%",
  "itemThumbnailShadowHorizontalLength": 3,
  "itemLabelFontFamily": "Arial",
  "itemThumbnailHeight": 75
 },
 {
  "id": "IconButton_FFCAC817_EEE8_3D92_41ED_028C443C8DDC",
  "paddingRight": 0,
  "class": "IconButton",
  "mode": "toggle",
  "horizontalAlign": "center",
  "minHeight": 1,
  "shadow": false,
  "backgroundOpacity": 0,
  "paddingLeft": 0,
  "borderRadius": 0,
  "click": "if(!this.ThumbnailList_FE4672A6_EE68_32B5_4184_D4434ABAF23A.get('visible')){ this.setComponentVisibility(this.ThumbnailList_FE4672A6_EE68_32B5_4184_D4434ABAF23A, true, 0, this.effect_FD65328D_EE68_2D77_41D7_1E79CFF7B7A3, 'showEffect', false) } else if(this.ThumbnailList_FE4672A6_EE68_32B5_4184_D4434ABAF23A.get('visible')){ this.setComponentVisibility(this.ThumbnailList_FE4672A6_EE68_32B5_4184_D4434ABAF23A, false, 0, this.effect_FD65028D_EE68_2D77_41B6_C98AFC7A9C95, 'hideEffect', false) }; if(!this.Container_FFE1194F_EED8_7FF3_41EA_328DCBE5651F.get('visible')){ this.setComponentVisibility(this.Container_FFE1194F_EED8_7FF3_41EA_328DCBE5651F, true, 0, this.effect_FD65328D_EE68_2D77_41D7_1E79CFF7B7A3, 'showEffect', false) } else if(this.Container_FFE1194F_EED8_7FF3_41EA_328DCBE5651F.get('visible')){ this.setComponentVisibility(this.Container_FFE1194F_EED8_7FF3_41EA_328DCBE5651F, false, 0, this.effect_FD65028D_EE68_2D77_41B6_C98AFC7A9C95, 'hideEffect', false) }; if(!this.IconButton_FC53386C_EE78_1DB5_41E9_749490DE5361.get('visible')){ this.setComponentVisibility(this.IconButton_FC53386C_EE78_1DB5_41E9_749490DE5361, true, 0, this.effect_FD65328D_EE68_2D77_41D7_1E79CFF7B7A3, 'showEffect', false) } else if(this.IconButton_FC53386C_EE78_1DB5_41E9_749490DE5361.get('visible')){ this.setComponentVisibility(this.IconButton_FC53386C_EE78_1DB5_41E9_749490DE5361, false, 0, this.effect_FD65028D_EE68_2D77_41B6_C98AFC7A9C95, 'hideEffect', false) }",
  "minWidth": 1,
  "paddingBottom": 0,
  "verticalAlign": "middle",
  "cursor": "hand",
  "width": 31,
  "height": 26,
  "paddingTop": 0,
  "borderSize": 0,
  "transparencyActive": false,
  "maxWidth": 72,
  "right": "1.68%",
  "iconURL": "skin/IconButton_FFCAC817_EEE8_3D92_41ED_028C443C8DDC.png",
  "maxHeight": 64,
  "top": "1.75%"
 },
 {
  "bottom": "0.31%",
  "id": "Container_FFE1194F_EED8_7FF3_41EA_328DCBE5651F",
  "gap": 4,
  "scrollBarColor": "#000000",
  "paddingRight": 0,
  "scrollBarOpacity": 0.5,
  "class": "Container",
  "horizontalAlign": "center",
  "minHeight": 20,
  "visible": false,
  "shadow": false,
  "overflow": "hidden",
  "borderRadius": 0,
  "backgroundOpacity": 0,
  "layout": "horizontal",
  "paddingLeft": 0,
  "children": [
   "this.IconButton_FFE0494C_EED8_7FF5_41E7_554503EA6305",
   "this.IconButton_FFE0794C_EED8_7FF6_41D7_3545395DA128",
   "this.IconButton_FFE0194D_EED8_7FF7_41EA_AAE137285F28",
   "this.IconButton_FAF0A4F1_EE78_16AF_41B4_0C57CEBB87B2",
   "this.IconButton_FFE2B94E_EED8_7FF5_41E0_466A95E9A930",
   "this.IconButton_FFE1794F_EED8_7FF3_41DD_3EECABEB5379"
  ],
  "minWidth": 20,
  "paddingBottom": 0,
  "contentOpaque": false,
  "verticalAlign": "middle",
  "scrollBarWidth": 10,
  "scrollBarVisible": "rollOver",
  "width": "28.515%",
  "paddingTop": 0,
  "height": "13.559%",
  "left": "35.54%",
  "borderSize": 0,
  "scrollBarMargin": 2
 },
 {
  "bottom": "3.83%",
  "toolTipFontFamily": "Arial",
  "id": "IconButton_FC53386C_EE78_1DB5_41E9_749490DE5361",
  "toolTipTextShadowBlurRadius": 3,
  "toolTipBorderSize": 1,
  "paddingRight": 0,
  "class": "IconButton",
  "toolTipPaddingTop": 4,
  "mode": "toggle",
  "horizontalAlign": "center",
  "minHeight": 1,
  "visible": false,
  "toolTipPaddingLeft": 6,
  "shadow": false,
  "toolTipShadowOpacity": 1,
  "toolTipPaddingBottom": 4,
  "borderRadius": 0,
  "backgroundOpacity": 0,
  "paddingLeft": 0,
  "minWidth": 1,
  "paddingBottom": 0,
  "verticalAlign": "middle",
  "toolTipOpacity": 1,
  "toolTipShadowHorizontalLength": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "cursor": "hand",
  "toolTipTextShadowOpacity": 0,
  "width": 41,
  "toolTipBorderRadius": 3,
  "toolTipFontSize": 12,
  "toolTipShadowVerticalLength": 0,
  "height": 38,
  "paddingTop": 0,
  "toolTipShadowSpread": 0,
  "toolTipPaddingRight": 6,
  "toolTip": "Fullscreen",
  "toolTipFontStyle": "normal",
  "toolTipTextShadowColor": "#000000",
  "left": "3.17%",
  "borderSize": 0,
  "transparencyActive": true,
  "toolTipShadowBlurRadius": 3,
  "maxWidth": 128,
  "toolTipBorderColor": "#767676",
  "toolTipShadowColor": "#333333",
  "toolTipFontColor": "#606060",
  "iconURL": "skin/IconButton_FC53386C_EE78_1DB5_41E9_749490DE5361.png",
  "maxHeight": 128,
  "toolTipFontWeight": "normal"
 },
 {
  "id": "Image_26114CA5_2D0F_0963_41C2_4D3B81C064D2",
  "paddingRight": 0,
  "class": "Image",
  "horizontalAlign": "center",
  "minHeight": 1,
  "shadow": false,
  "backgroundOpacity": 0,
  "paddingLeft": 0,
  "borderRadius": 0,
  "click": "this.openLink(\"https://damarajimbaran.com/\", \"_blank\")",
  "minWidth": 1,
  "paddingBottom": 0,
  "verticalAlign": "middle",
  "cursor": "hand",
  "width": "9.307%",
  "paddingTop": 0,
  "height": "6.539%",
  "scaleMode": "fit_inside",
  "url": "skin/Image_26114CA5_2D0F_0963_41C2_4D3B81C064D2.png",
  "left": "0.69%",
  "borderSize": 0,
  "maxWidth": 142,
  "maxHeight": 86,
  "top": "1.42%"
 }
], 
 "start": "this.syncPlaylists([this.ThumbnailList_FE4672A6_EE68_32B5_4184_D4434ABAF23A_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_FC53386C_EE78_1DB5_41E9_749490DE5361].forEach(function(component) { component.set('visible', false); }) }",
 "id": "rootPlayer",
 "scripts": {
  "existsKey": function(key){  return key in window; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "unregisterKey": function(key){  delete window[key]; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getKey": function(key){  return window[key]; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "registerKey": function(key, value){  window[key] = value; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; }
 },
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarOpacity": 0.5,
 "class": "Player",
 "gap": 10,
 "minHeight": 20,
 "buttonToggleFullscreen": "this.IconButton_FC53386C_EE78_1DB5_41E9_749490DE5361",
 "shadow": false,
 "backgroundPreloadEnabled": true,
 "horizontalAlign": "left",
 "borderRadius": 0,
 "layout": "absolute",
 "paddingLeft": 0,
 "vrPolyfillScale": 1,
 "paddingBottom": 0,
 "contentOpaque": false,
 "verticalAlign": "top",
 "overflow": "visible",
 "minWidth": 20,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "paddingTop": 0,
 "height": "100%",
 "scrollBarMargin": 2,
 "borderSize": 0,
 "mouseWheelEnabled": true
})