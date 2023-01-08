 // Mock provider(for providers error when deploying)
 export const facebookProvider = {
  callbackUrl: "http://localhost:3000/api/auth/callback/facebook",
  id:"facebook",
  name:"Facebook",
  signinUrl:"http://localhost:3000/api/auth/signin/facebook",
  type: "oauth"
}

export const instagramProvider = {
  callbackUrl:"http://localhost:3000/api/auth/callback/instagram",
  id:"instagram",
  name: "Instagram",
  signinUrl:"http://localhost:3000/api/auth/signin/instagram",
  type:"oauth",
}