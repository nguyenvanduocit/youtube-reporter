new Vue({
  template: '#app-template',
  el: '#app',
  data () {
    return {
      message: '',
      fields: {
        requester_title: {
          label: 'Chức vụ của bạn',
          value: ''
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
          value: ''
        },
        city: {
          label: 'Thành phố',
          value: ''
        },
        state: {
          label: 'Tình',
          value: ''
        },
        zip: {
          label: 'Mã bưu điện',
          value: ''
        },
        phone: {
          label: 'Số điện thoại',
          value: ''
        }
      }
    }
  },
  computed: {
    isLoading () {
      return this.message !== ''
    }
  },
  mounted () {
    this.loadOptions()
  },
  methods: {
    save () {
      this.message = 'Saving your settings...'
      chrome.storage.sync.set(this.fields, () => {
        this.message = 'Success! Auto close in 3 seconds'
        setTimeout(() => {
          this.message = ''
        }, 3000)
      })
    },
    loadOptions () {
      this.message = 'Loading your settings...'
      chrome.storage.sync.get(this.fields, (options) => {
        this.fields = options
        this.message = ''
      })
    }
  }
})