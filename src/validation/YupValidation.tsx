import * as yup from "yup"

const emailRegex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;

let YupValidation = yup.object().shape({
    name: yup.string().required("نوشتن اسم الزامی میباشد..."),
    email: yup.string().matches(emailRegex, "ایمیل معتبر نیست").required("نوشتن ایمیل الزامی میباشد..."),
    topic: yup.string().required(" موضوع خود را وارد کنید..."),
    comment: yup.string().required("دیدگاه خود را وارد کنید..."),
})

let YupValidationLogin = yup.object().shape({
    username: yup.string().required("نام کاربری خود را وارد کنید..."),
    password: yup.string().required("کلمه عبور خود را وارد کنید..."),
})

export { YupValidation, YupValidationLogin };


