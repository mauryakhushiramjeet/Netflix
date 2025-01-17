export const checkValideData = (email, password,name) => {
    const isEmailValide = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test
        (email)
    const isPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test
        (password)

       const isName= /^[a-zA-Z]+$/.test(name)
    if (!isEmailValide) return "Email ID is not valid"
    if (!isPassword) return "Password is not valid"
    if (!isName) return "Name is not valid"

    return null;

}