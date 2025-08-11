import './src/styles/global.css';

export const onClientEntry = async () => {
    if (typeof window !== 'undefined') {
      await import('flyonui/dist/index.js');
    }
  };
  
  export const onRouteUpdate = () => {
    if (typeof window !== 'undefined' && window.HSStaticMethods?.autoInit) {
      setTimeout(() => {
        window.HSStaticMethods.autoInit();
      }, 100);
    }
  };