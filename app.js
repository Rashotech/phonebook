// PhoneBook class
class PhoneBook {
    constructor() {
      this.values = {};
      this.length =  0;
      this.size =  50;
    }
  
    // Hash function
    calculateHash(key) {
        let hashCode = 0;
        for (let characterIndex = 0; characterIndex < key.length; characterIndex += 1) {
            hashCode += key.charCodeAt(characterIndex);
        }
        return hashCode % this.size;
    }
  
    // Phonebook store method
    store(key, name, email) {
      const hash = this.calculateHash(key);
      console.log(hash)
      if (!this.values.hasOwnProperty(hash)) {
        this.values[hash] = {};
      }
      if (!this.values[hash].hasOwnProperty(key)) {
         this.length++;
      }
      if(this.values[hash][key] !== undefined) {
          return "Phone number already in phonebook"
      };
      this.values[hash][key] = {
        phone: key,
        name,
        email,
        created_at: new Date()
      };
    }
  
    // Phonebook search method
    search(key) {
       const hash = this.calculateHash(key);
       if (this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) {
         return this.values[hash][key];
       } else {
         return 'Phone details not found';
       }
    }

    // Phonebook list method
    list() {
        const result = [];
        Object.values(this.values).forEach((value) => {
            Object.values(value).forEach((phone) => {
                result.push(phone);
            });
        });
        return result;
    }
};
  
// Create PhoneBook instance.
const phone = new PhoneBook();

// Add several contacts to the phone book.
phone.store("08133166978", "Ade", "ade@gmail.com");
phone.store("09027175094", "Bayo", "bayo@gmail.com");
phone.store("08090028812", "Korede", "korede@gmail.com");

// Now we can get unique phone details using the phone number in O(1) time.
console.log(phone.search("08133166978"));
console.log(phone.search("09027175094"));
console.log(phone.search("08090028812"));
console.log(phone.search("09038973373"));

// list of phone numbers
console.log(phone.list());