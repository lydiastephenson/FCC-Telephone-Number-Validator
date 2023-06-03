function telephoneCheck(str) {
    let rgx = /^(1\s|1)?(\(\d{3}\)|\d{3})(\s|-)*(\(\d{3}\)|\d{3})(\s|-)*\d{4}$/
    if (rgx.test(str)) return true
    return false;
}

