interface NavigationDataProps {
  type: string,
  url: string,
  text: string
}

export const navigationData: NavigationDataProps[] = [
    {
      type: 'link',
      url: '/',
      text: 'Dashboard'
    },
    {
      type: 'link',
      url: '/login',
      text: 'Login'
    },
  ]