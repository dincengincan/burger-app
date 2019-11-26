import React from 'react';
import {Item}  from "../../components";

function ItemList(props) {
    /* 
    SORU 1
        HOW MANY FONKSİYONUNU MAP İÇERİSİNDE DEĞİL DIŞARIDA KULLANMAYA ÇALIŞTIM AMA SONUÇ ALAMADIM. MAP İÇERİSİNDE DİREK FİLTRELEYİNCE
        ÇALIŞIYOR. İLLE DE MAP İÇİNDE Mİ OLMASI GEREKİYOR? AKSİ TAKTİRDE HER BİR ELEMANIN(MARUL,KOFTE,DOMATES VS) İÇERİSİNE PROP OLARAK
        HOWMANY GÖNDEREMİYORUM SANIRIM?
         
    SORU 2
        İŞE YARAMAYAN FONKSİYONU KULLANIRKEN KARŞILAŞTIĞIM GARİP BİR SORUN OLDU: ITEM'LERİ <ITEM/> İÇERİSİNE GÖNDERİRKEN REST OPERATÖRÜ
        YERİNE ITEM = {ITEM} OLARAK İSİM VEREREK GÖNDERİRSEM, İŞE YARAMAYAN HOW MANY FONKSİYONUN RETURN KISMINDA, 
        ITEM.NAME === SELECTEDITEM.ITEM.NAME YAPMAM GEREKİYOR ÇALIŞMASI İÇİN. BUNUN SEBEBİNİ ANLAYAMADIM? NOT: BU SORUYU TELEGRAMDAN 
        GÖNDERDİĞİM GÖRSELDE OKLARLA DAHA İYİ ANLATMIŞTIM. BURDAKİ NOTU ANLAMAZSANIZ TELEGRAMDAKİ GÖRSEL DAHA AÇIKLAYICI OLABİLİR.
        */
    
    
    
    // İŞE YARAMAYAN VERSİYON
    const howMany = props.items.filter(item => {
        return props.selectedItems.some(selectedItem => {
            return item.name === selectedItem.name;  // {...ITEM} YERİNE, ITEM = {ITEM} OLARAK GÖNDERİRSEM AŞAĞIYA, BURAYI: RETURN ITEM.NAME === SELECTEDITEM.ITEM.NAME ŞEKLİNDE REVİZE ETMEM GEREKİYOR.NEDEN?
        })                                          
        })

    return (
        <div>
            
            {props.items.map(item => {
                
               /*   //İŞE YARAYAN VERSİYON
                    const howMany = props.selectedItems.filter(selectedItem => {
                    return item.name === selectedItem.name;
                }) */

                const isThere = props.selectedItems.find(selectedItem => {
                    return item.name === selectedItem.name;
                
                })
                
                
                return <Item {...item} key = {item.id}
                        removeAllItems = {props.removeAllItems}
                        removeItem = {props.removeItem}
                        addItem = {props.addItem}
                        selectedItems = {props.selectedItems}
                        howMany = {howMany.length}
                        isThere = {isThere} />
            })} 
        </div>
    )

    
}

export default ItemList;