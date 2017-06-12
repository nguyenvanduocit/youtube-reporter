let actions = [
  {
    label: 'Vấn đề là gì?',
    querySelector: '#complaint_type_copyright',
    action: 'click'
  },
  {
    label: 'Ai bị ảnh hưởng?',
    querySelector: '#affected_entity_company',
    action: 'click'
  },
  {
    label: 'Loại vi pham',
    querySelector: '#issue_type_0',
    action: 'change',
    value: 'X'
  },
  {
    label: 'Vị trí vi phạm (other source)',
    querySelector: '[value="ENTIRE_VIDEO"][name="issue_detail_X_position_0"]',
    action: 'click'
  },
  {
    label: 'Vị trí vi phạm (reup)',
    querySelector: '[value="ENTIRE_VIDEO"][name="issue_detail_V_position_0"][id="issue_detail_V_entire_video_0"]',
    action: 'click'
  },
  {
    label: 'Tên chủ sở hữu bản quyền',
    querySelector: '#owner_display_name',
    action: 'fill',
    value: 'Cty TNHH Văn hóa Pháp Quang'
  },
  {
    label: 'Chức danh hoặc Chức vụ của bạn',
    querySelector: '#requester_title',
    action: 'fill',
    value: 'Nhân viên',
    optionKey: 'requester_title'
  },
  {
    label: 'Tên của bạn',
    querySelector: '#requester_name',
    action: 'fill',
    value: '',
    optionKey: 'requester_name'
  },
  {
    label: 'Số nhà, đường, phường',
    querySelector: '#address1',
    action: 'fill',
    value: '',
    optionKey: 'address1'
  },
  {
    label: 'Quận',
    querySelector: '#address2',
    action: 'fill',
    value: '',
    optionKey: 'address2'
  },
  {
    label: 'Thành phố',
    querySelector: '#city',
    action: 'fill',
    value: '',
    optionKey: 'city'
  },{
    label: 'Tỉnh',
    querySelector: '#state',
    action: 'fill',
    value: '',
    optionKey: 'state'
  },
  {
    label: 'Mã bưu điện',
    querySelector: '#zip',
    action: 'fill',
    value: '',
    optionKey: 'zip'
  },
  {
    label: 'Số điện thoại',
    querySelector: '#phone',
    action: 'fill',
    value: '',
    optionKey: 'phone'
  },
  {
    label: 'checkbox_confirmation_1',
    querySelector: '#checkbox_confirmation_1',
    action: 'click'
  },
  {
    label: 'checkbox_confirmation_2',
    querySelector: '#checkbox_confirmation_2',
    action: 'click'
  },
  {
    label: 'checkbox_confirmation_3',
    querySelector: '#checkbox_confirmation_3',
    action: 'click'
  },
  {
    label: 'checkbox_confirmation_liability',
    querySelector: '#checkbox_confirmation_liability',
    action: 'click'
  },
  {
    label: 'checkbox_confirmation_abuse_termination',
    querySelector: '#checkbox_confirmation_abuse_termination',
    action: 'click'
  },
  {
    label: 'Ký tên',
    querySelector: '#owner_signature',
    action: 'fill',
    value: '',
    optionKey: 'requester_name'
  }
]
loadOptions().then((options) => {
  let $form = document.getElementById('copyright-complaint-form')
  let checkFormReadyInv = setInterval(() => {
    if (!$form.classList.contains('hid')) {
      clearInterval(checkFormReadyInv)
      fillForm(options)
    }
  }, 500)
})

function loadOptions () {
  let defaultOptions = {
    requester_title: {
      label: 'Chức vụ của bạn',
      value: 'Nhân Viên'
    },
    requester_name: {
      label: 'Tên của bạn',
      value: ''
    },
    address1: {
      label: 'Số nhà, đường, phường/xã',
      value: ''
    },
    address2: {
      label: 'Quận/huyện',
      value: '3'
    },
    city: {
      label: 'Thành phố',
      value: 'Hồ Chí Minh'
    },
    state: {
      label: 'Tình',
      value: 'Hồ Chí Minh'
    },
    zip: {
      label: 'Mã bưu điện',
      value: '700000'
    },
    phone: {
      label: 'Số điện thoại',
      value: ''
    }
  }
  return new Promise((resolve, reject) => {
    chrome.storage.sync.get(defaultOptions, (options) => {
      resolve(options)
    })
  })
}

function fillForm (options) {
  actions.forEach(action => {
    let $el = document.querySelector(action.querySelector)
    let value = action.value
    if (action.hasOwnProperty('optionKey')) {
      value = options[action.optionKey].value
      console.log(action.optionKey, value)
    }
    switch (action.action) {
      case 'click':
        $el.click()
        break

      case 'change':
        $el.value = value
        $el.dispatchEvent(new Event('change'))
        break

      case 'fill':
        $el.value = value
        $el.dispatchEvent(new Event('change'))
        break
    }
  })
}