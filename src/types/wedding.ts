export interface Person {
  name: string;
  fullName: string;
  photo: string;
  fatherName: string;
  motherName: string;
  childOrder: string;
  instagram?: string;
  instagramHandle?: string;
}

export interface EventDetail {
  title: string;
  day: string;
  date: string;
  time: string;
  startDateTime: string; // ISO datetime in Asia/Jakarta timezone e.g. "2027-03-21T08:00:00+07:00"
  endDateTime: string;   // ISO datetime in Asia/Jakarta timezone e.g. "2027-03-21T10:00:00+07:00"
  venue: string;
  address: string;
  description: string;
  googleMapsUrl: string;
  calendarUrl?: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  width?: number;
  height?: number;
  caption?: string;
}

export interface Wish {
  id?: string;
  name: string;
  attendance: "Hadir" | "Tidak Hadir";
  attendeesCount: number;
  message: string;
  createdAt?: string;
}

export interface BankAccount {
  bank: string;
  accountName: string;
  accountNumber: string;
  qrCodeUrl?: string;
}

export interface WeddingConfig {
  bride: Person;
  groom: Person;
  weddingDate: string; // ISO format or valid date string for countdown
  formattedDate: string;
  greetingVerse: {
    surah: string;
    arabic: string;
    translation: string;
  };
  introGreeting: {
    bismillah: string;
    greeting: string;
    paragraph: string;
  };
  events: {
    akad: EventDetail;
    resepsi: EventDetail;
  };
  bankAccounts: BankAccount[];
  gallery: GalleryItem[];
  music: {
    src: string;
    title: string;
    artist: string;
  };
  coverImage: string;
  heroImage: string;
  closingImage: string;
  meta: {
    title: string;
    description: string;
    ogImage: string;
  };
}
