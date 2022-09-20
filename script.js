console.log('JS OK!')

const app = new Vue({
    el: '#app',
    data: {
        activeIndex: 0,
        newMessage: '',
        newSearchContact: '',
        contacts: [
        {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                {
                date: '10/01/2020 15:30:55',
                message: 'Hai portato a spasso il cane?',
                status: 'sent'
                },
                {
                date: '10/01/2020 15:50:00',
                message: 'Ricordati di stendere i panni',
                status: 'sent'
                },
                {
                date: '10/01/2020 16:15:22',
                message: 'Tutto fatto!',
                status: 'received'
                }
            ],
        },
           {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                {
                date: '20/03/2020 16:30:00',
                message: 'Ciao come stai?',
                status: 'sent'
                },
                {
                date: '20/03/2020 16:30:55',
                message: 'Bene grazie! Stasera ci vediamo?',
                status: 'received'
                },
                {
                date: '20/03/2020 16:35:00',
                message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'sent'
                }
            ],
        },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                {
                date: '28/03/2020 10:10:40',
                message: 'La Marianna va in campagna',
                status: 'received'
                },
                {
                date: '28/03/2020 10:20:10',
                message: 'Sicuro di non aver sbagliato chat?',
                status: 'sent'
                },
                {
                date: '28/03/2020 16:15:22',
                message: 'Ah scusa!',
                status: 'received'
                }
            ],
        },
            {
                name: 'Alessandro B.',
                avatar: '_4',
                visible: true,
                messages: [
                {
                date: '10/01/2020 15:30:55',
                message: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent'
                },
                {
                date: '10/01/2020 15:50:00',
                message: 'Si, ma preferirei andare al cinema',
                status: 'received'
                }
            ],
        },
            {
                name: 'Alessandro L.',
                avatar: '_5',
                visible: true,
                messages: [
                {
                date: '10/01/2020 15:30:55',
                message: 'Ricordati di chiamare la nonna',
                status: 'sent'
                },
                {
                date: '10/01/2020 15:50:00',
                message: 'Va bene, stasera la sento',
                status: 'received'
                }
            ],
        },
        {
                name: 'Claudia',
                avatar: '_6',
                visible: true,
                messages: [
                {
                date: '10/01/2020 15:30:55',
                message: 'Ciao Claudia, hai novità?',
                status: 'sent'
                },
                {
                date: '10/01/2020 15:50:00',
                message: 'Non ancora',
               status: 'received'
                },
                {
                date: '10/01/2020 15:51:00',
                message: 'Nessuna nuova, buona nuova',
                status: 'sent'
                }
            ],
        },
    
    ]           
  },

    methods: {
    setActiveContact(index){
        this.activeIndex = index;
    },

    getHoursMinutes(dateFormat){
        const array = dateFormat.split(" ");
        const ora = array[1];
        const arrayOra = ora.split(":");
        const oreMinuti = arrayOra[0] + ":" + arrayOra[1];
        return oreMinuti;
    },

    sendMessage(){
        console.log(this.newMessage);
        const selectedContact = this.contacts[this.activeIndex];
        selectedContact.messages.push({
            date: this.getNow(),
            message: this.newMessage,
            status: "sent",
        });

        setTimeout(() =>{
            selectedContact.messages.push({
                date: this.getNow(),
                message: 'Ok!',
                status: "received",
            })
         }, 1000)
    },

    searchContact(){
        console.log(this.newSearchContact);
        this.contacts.forEach((contact) => {
            contact.visible = contact.name.toLowerCase().includes(this.newSearchContact.toLowerCase());
            console.log('visible:', contact.visible);

        });

    },
    
    getNow(){
        const now = new Date();
        console.log(now.getHours() + ":" + now.getMinutes());

        const hours = this.formatDatePart(now.getHours());
        const minutes = this.formatDatePart(now.getMinutes());
        const seconds = this.formatDatePart(now.getSeconds());
        const day = this.formatDatePart(now.getDay());
        const month = this.formatDatePart(now.getMonth() +1 );
        const year = this.formatDatePart(now.getFullYear());
        return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`
    },

    formatDatePart(datePart){
        return datePart < 10 ? '0' + datePart : datePart;
    },
  }

})