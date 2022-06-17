import React, { useRef } from 'react';
import './App.css';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';
import { Toast } from 'primereact/toast';

const App = () => {
  const menu = useRef(null);
  const toast = useRef(null);
  const logo = <img alt="logo" src="showcase/images/logo.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} height="40" className="mr-2"></img>;

  const items = [
    {
      label: 'Sidebar',
      items: [
        {
          label: 'Logo',
          icon: logo,
          command: () => {
            toast.current.show({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
          }
        },
        {
          label: 'Update',
          icon: 'pi pi-refresh',
          command: () => {
            toast.current.show({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
          }
        },
        {
          label: 'Delete',
          icon: 'pi pi-times',
          command: () => {
            toast.current.show({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
          }
        }
      ]
    },
    {
      label: 'Navigate',
      items: [
        {
          label: 'React Website',
          icon: 'pi pi-external-link',
          url: 'https://reactjs.org/'
        },
        {
          label: 'Router',
          icon: 'pi pi-upload',
          command: (e) => {
            window.location.hash = "/fileupload"
          }
        }
      ]
    }
  ];

  return (
    <div>
      <Toast ref={toast}></Toast>
      <div className="card">
        
      </div>
      <div className="layout-sidebar">
        <h5>Inline</h5>
        <Menu className='sidebar' model={items} />
      </div>
    </div>
  );
}

export default App;
