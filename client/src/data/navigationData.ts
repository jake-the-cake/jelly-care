interface NavigationDataProps {
  type: string,
  url: string,
  text: string
}

export const navigationData: NavigationDataProps[] = [
    {
      type: 'link',
      url: '/',
      text: 'Home'
    },
    {
      type: 'link',
      url: '/dashboard',
      text: 'Dashboard'
    },
    {
      type: 'link',
      url: '/login',
      text: 'Login'
    },
  ]