import React from 'react'

export function CloseIcon () {
  return (
    <svg width="14px" height="14px" viewBox="0 0 14 14">
      <g id="Sidebar-M" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="O2---Mobile-Sidebar-Test" transform="translate(-325.000000, -21.000000)">
          <g id="Tool-/-Calculate" transform="translate(312.000000, 8.000000)">
            <g id="ic/close" transform="translate(8.000000, 8.000000)">
              <g>
                <polygon points="0 0 24 0 24 24 0 24"></polygon>
                <polygon fill="#000" opacity="0.8" points="19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12"></polygon>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}

export function MenuIcon () {
  return (
    <svg width="18px" height="12px" viewBox="0 0 18 12">
      <g id="Sidebar" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="O2---Mobile" transform="translate(-283.000000, -22.000000)">
          <g id="Tool-/-Calculate" transform="translate(272.000000, 8.000000)">
            <g id="ic/sidebar" transform="translate(8.000000, 8.000000)">
              <g id="sidebar">
                <polygon points="0 0 24 0 24 24 0 24"></polygon>
                <path d="M3,18 L21,18 L21,16 L3,16 L3,18 L3,18 Z M3,13 L21,13 L21,11 L3,11 L3,13 L3,13 Z M3,6 L3,8 L21,8 L21,6 L3,6 L3,6 Z" fill="#000000" opacity="0.6"></path>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}

export const CalculateIcon = ({ fill='#000' }) => {
  return (
    <svg width="14px" height="20px" viewBox="0 0 14 20">
      <g id="Sidebar-M" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="O2---Mobile-Sidebar-Test" transform="translate(-203.000000, -126.000000)">
          <g id="TabBar" transform="translate(0.000000, 116.000000)">
            <g id="Tabs-/-Markers" transform="translate(182.000000, 0.000000)">
              <g id="ic/pin-A" transform="translate(16.000000, 8.000000)">
                <polygon id="ic/pin" points="0 0 24 0 24 24 0 24"></polygon>
                <g id="ic/pin" fill-rule="evenodd">
                  <CalculateIconPart fill={fill} />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  )

  function CalculateIconPart({ fill }) {
    return (
      <path fill={fill} d="M12,2 C8.13,2 5,5.13 5,9 C5,14.25 12,22 12,22 C12,22 19,14.25 19,9 C19,5.13 15.87,2 12,2 L12,2 Z M12,11.5 C10.62,11.5 9.5,10.38 9.5,9 C9.5,7.62 10.62,6.5 12,6.5 C13.38,6.5 14.5,7.62 14.5,9 C14.5,10.38 13.38,11.5 12,11.5 L12,11.5 Z"></path>
    )
  }
}

export const DownloadIcon = ({ fill='#000' }) => (
  <svg width="20px" height="16px" viewBox="0 0 20 16">
      <g id="Sidebar-M" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="O2---Mobile-Sidebar-Test" transform="translate(-322.000000, -128.000000)">
              <g id="TabBar" transform="translate(0.000000, 116.000000)">
                  <g id="Tabs" transform="translate(304.000000, 0.000000)">
                      <g id="ic/download" transform="translate(16.000000, 8.000000)">
                          <g id="ic_folder_black_24px">
                              <g id="Group">
                                  <path d="M10,4 L4,4 C2.9,4 2.01,4.9 2.01,6 L2,18 C2,19.1 2.9,20 4,20 L20,20 C21.1,20 22,19.1 22,18 L22,8 C22,6.9 21.1,6 20,6 L12,6 L10,4 L10,4 Z" id="Shape" fill={fill}></path>
                                  <polygon id="Shape" points="0 0 24 0 24 24 0 24"></polygon>
                              </g>
                          </g>
                      </g>
                  </g>
              </g>
          </g>
      </g>
  </svg>
)

export const LayersIcon = ({ fill='#000' }) => (
  <svg width="24px" height="24px" viewBox="0 0 24 24">
      <g id="Symbols" stroke="none" stroke-width="1" fill="none" fillRule="evenodd">
          <g id="ic/layers">
              <g id="ic_layers_black_24px">
                  <g id="Group">
                      <polygon id="Shape" points="0 0 24 0 24 24 0 24"></polygon>
                      <path d="M11.99,18.54 L4.62,12.81 L3,14.07 L12,21.07 L21,14.07 L19.37,12.8 L11.99,18.54 L11.99,18.54 Z M12,16 L19.36,10.27 L21,9 L12,2 L3,9 L4.63,10.27 L12,16 L12,16 Z" id="Shape" fill={fill}></path>
                  </g>
              </g>
          </g>
      </g>
  </svg>
)

export const PrintIcon = ({ fill='#000' }) => (
  <svg width="20px" height="18px" viewBox="0 0 20 18">
      <g id="Sidebar-M" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="O2---Mobile-Sidebar-Test" transform="translate(-261.000000, -127.000000)">
              <g id="TabBar" transform="translate(0.000000, 116.000000)">
                  <g id="Tabs" transform="translate(243.000000, 0.000000)">
                      <g id="ic/print" transform="translate(16.000000, 8.000000)">
                          <g id="ic_print_black_24px">
                              <g id="Group">
                                  <path d="M19,8 L5,8 C3.34,8 2,9.34 2,11 L2,17 L6,17 L6,21 L18,21 L18,17 L22,17 L22,11 C22,9.34 20.66,8 19,8 L19,8 Z M16,19 L8,19 L8,14 L16,14 L16,19 L16,19 Z M19,12 C18.45,12 18,11.55 18,11 C18,10.45 18.45,10 19,10 C19.55,10 20,10.45 20,11 C20,11.55 19.55,12 19,12 L19,12 Z M18,3 L6,3 L6,7 L18,7 L18,3 L18,3 Z" id="Shape" fill={fill}></path>
                                  <polygon id="Shape" points="0 0 24 0 24 24 0 24"></polygon>
                              </g>
                          </g>
                      </g>
                  </g>
              </g>
          </g>
      </g>
  </svg>
)

export const VolumeIcon = ({ fill='#000' }) => (
  <svg width="18px" height="18px" viewBox="0 0 18 18">
      <defs>
          <mask id="mask-2" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x="0" y="0" width="18" height="18" fill="white">
              <circle id="path-1" cx="12" cy="12" r="9"></circle>
          </mask>
          <mask id="mask-4" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x="0" y="0" width="18" height="18" fill="white">
              <circle id="path-1" cx="12" cy="12" r="9"></circle>
          </mask>
      </defs>
      <g id="Sidebar-M" stroke="none" stroke-width="1" fill="none" fillRule="evenodd">
          <g id="O2---Mobile-Sidebar-Test" transform="translate(-80.000000, -127.000000)">
              <g id="TabBar" transform="translate(0.000000, 116.000000)">
                  <g id="Tabs-/-Volumes-A" transform="translate(61.000000, 0.000000)">
                      <g id="ic/volume" transform="translate(16.000000, 8.000000)">
                          <g>
                                  <circle id="path-1" cx="12" cy="12" r="9" fill={fill}></circle>
                              {/* <path d="M12,11 L15.699722,14.1711903 L19,17 C19,17 14.3183218,19.8823662 12,19.8823662 C9.65165516,19.8823662 5,17 5,17 L12,11 Z" fill="#000000" mask="url(#mask-3)"></path> */}
                          </g>
                      </g>
                  </g>
              </g>
          </g>
      </g>
  </svg>
)

export const ScanIcon = ({ fill='#000' }) => (
  <svg width="18px" height="20px">
      <g id="Sidebar-M" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="O2---Mobile-Sidebar-Test" transform="translate(-19.000000, -126.000000)">
              <g id="TabBar" transform="translate(0.000000, 116.000000)">
                  <g id="Tabs-/-Scans">
                      <g id="Tabs">
                          <g id="ic/scan" transform="translate(16.000000, 8.000000)">
                              <g id="ic_date_range_black_24px">
                                  <g id="Group">
                                      <polygon id="Shape" points="0 0 24 0 24 24 0 24"></polygon>
                                      <path d="M9,11 L7,11 L7,13 L9,13 L9,11 L9,11 Z M13,11 L11,11 L11,13 L13,13 L13,11 L13,11 Z M17,11 L15,11 L15,13 L17,13 L17,11 L17,11 Z M19,4 L18,4 L18,2 L16,2 L16,4 L8,4 L8,2 L6,2 L6,4 L5,4 C3.89,4 3.01,4.9 3.01,6 L3,20 C3,21.1 3.89,22 5,22 L19,22 C20.1,22 21,21.1 21,20 L21,6 C21,4.9 20.1,4 19,4 L19,4 Z M19,20 L5,20 L5,9 L19,9 L19,20 L19,20 Z" id="Shape" fill={fill}></path>
                                  </g>
                              </g>
                          </g>
                      </g>
                  </g>
              </g>
          </g>
      </g>
  </svg>
)
