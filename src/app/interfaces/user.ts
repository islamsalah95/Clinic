export interface User {
_id?:string
name?:string
password:string
email:string
age?:number
status?:boolean
type?:string
pImage?:string
otp?:string
tokens?:[
  {
    token?:string
    _id?:string
  }
]

}
