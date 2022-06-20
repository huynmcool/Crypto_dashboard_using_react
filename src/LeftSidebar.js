import React from 'react'
import { Button } from 'primereact/button';

const LeftSidebar = () => {
    return (
        <div class="flex flex-column">
            <div class="p-1  m-2 border-round">
            <img alt="logo" src="showcase/images/logo.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} height="40" className="mb-3"></img>
            </div>
            <div class="p-1  m-2 border-round">
                <Button icon="pi pi-th-large" />
            </div>
            <div class="p-1  m-2 border-round">
                <Button icon="pi pi-comment" />
            </div>
            <div class="p-1  m-2 border-round">
                <Button icon="pi pi-shopping-cart" />
            </div>
            <div class="p-1  m-2 border-round">
                <Button icon="pi pi-credit-card" />
            </div>
            <div class="p-1  m-2 border-round">
                <Button icon="pi pi-folder" />
            </div>
            <div class="p-1  m-2 border-round">
                <Button icon="pi pi-cog" />
            </div>
        </div>
    )
}

export default LeftSidebar