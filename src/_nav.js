export default {
  items: [
    {
      name: 'Main',
      url: '/dashboard',
      icon: 'icon-speedometer',
    },
    {
      name: 'Free Trial',
      url: '#',
      icon: 'icon-drop',
    },
    {
      name: 'Dunning',
      url: '#',
      icon: 'icon-pencil',
    },
    {
      title: true,
      name: 'Extras',
    },
    {
      name: 'Pages',
      url: '/pages',
      icon: 'icon-star',
      children: [
        {
          name: 'Login',
          url: '#',
          icon: 'icon-star',
        },
        {
          name: 'Register',
          url: '#',
          icon: 'icon-star',
        },
      ],
    },
    {
      name: 'Disabled',
      url: '/dashboard',
      icon: 'icon-ban',
      attributes: { disabled: true },
    },
    {
      name: 'Start now',
      url: 'https://retainu.com',
      icon: 'icon-cloud-download',
      class: 'mt-auto',
      variant: 'success',
      attributes: { target: '_blank', rel: "noopener" },
    },
  ],
};
