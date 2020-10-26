function left () {
  this.textarea_el = document.createElement('textarea')
  this.drag_el = document.createElement('drag')
  this.host = document.body
  this.host.appendChild(this.textarea_el)
  this.host.appendChild(this.drag_el)
  this.textarea_el.setAttribute('autocomplete', 'off')
  this.textarea_el.setAttribute('autocorrect', 'off')
  this.textarea_el.setAttribute('autocapitalize', 'off')
  this.textarea_el.setAttribute('spellcheck', 'false')
  this.textarea_el.setAttribute('type', 'text')
  this.el = document.createElement('style')
  this.el.type = 'text/css'
  this.host.appendChild(this.el)
  theme = { background: '#222', f_high: '#eee', f_med: '#888', f_low: '#666', f_inv: '#00f', b_high: '#f9a', b_med: '#a9f', b_low: '#000', b_inv: '#af9' }
  this.el.innerHTML = `:root { --background: ${theme.background}; --f_high: ${theme.f_high}; --f_med: ${theme.f_med}; --f_low: ${theme.f_low}; --f_inv: ${theme.f_inv}; --b_high: ${theme.b_high}; --b_med: ${theme.b_med}; --b_low: ${theme.b_low}; --b_inv: ${theme.b_inv}; }`
  this.textarea_el.focus()
  this.textarea_el.setSelectionRange(0, 0)
}

module.exports = left
