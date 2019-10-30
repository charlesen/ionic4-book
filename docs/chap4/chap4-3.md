## Composant Select

Ce composant permet un rendu du tag html **&lt;select&gt;&lt;/select&gt;** et va donc nous permettre d'afficher une liste de choix. Affichons par exemple ici la liste des 5 premières cryptomonnaies par capitalisation boursière :

```html
<ion-header>
  <ion-navbar color="duckcoin">
    <ion-title>Ma Page</ion-title>
  </ion-navbar>
</ion-header>
<ion-content padding>
  <ion-list>
    <ion-list-header text-center>
    TOP 10 des cryptos en Avril 2018
    </ion-list-header>
    <ion-item>
      <ion-label>Choisir dans la liste</ion-label>
      <ion-select value="btc">
        <ion-select-option value="btc">Bitcoin</ion-select-option>
        <ion-select-option value="xrp">Ethereum</ion-select-option>
        <ion-select-option value="xrp">Ripple</ion-select-option>
        <ion-select-option value="bch">Bitcoin Cash</ion-select-option>
        <ion-select-option value="eos">EOS</ion-select-option>
        <ion-select-option value="ltc">Litecoin</ion-select-option>
      </ion-select>
    </ion-item>
  </ion-list>
</ion-content>
```

![](/assets/composant_select.png)

Documentation : [https://ionicframework.com/docs/api/select](https://ionicframework.com/docs/api/select)
