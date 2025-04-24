import * as yup from "yup"

const emailRegex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;

let YupValidation = yup.object().shape({
    name: yup.string().required("نوشتن اسم الزامی میباشد..."),
    email: yup.string().matches(emailRegex, "ایمیل معتبر نیست").required("نوشتن ایمیل الزامی میباشد..."),
    topic: yup.string().required(" موضوع خود را وارد کنید..."),
    comment: yup.string().required("دیدگاه خود را وارد کنید..."),
})

export default YupValidation;