import { WeddingConfig } from "@/types/wedding";

export const weddingConfig: WeddingConfig = {
  bride: {
    name: "Adinda",
    fullName: "Adinda Rodhotul Jannah, S.Tr.Kom.",
    photo: "/images/bride.jpeg",
    fatherName: "Bpk. Sunarto",
    motherName: "Ibu Wasrah",
    childOrder: "Putri pertama dari",
    instagram: "https://instagram.com/adinda_rj",
    instagramHandle: "@adinda_rj",
  },
  groom: {
    name: "Elfan",
    fullName: "Helfanza Nanda Alfara, S.Tr.Kom.",
    photo: "/images/groom.jpeg",
    fatherName: "Bpk. Hengky Mardiyanto",
    motherName: "Ibu Maryati Jumeri",
    childOrder: "Putra pertama dari",
    instagram: "https://instagram.com/elfannandaa",
    instagramHandle: "@elfannandaa",
  },
  // Future date for live countdown testing
  weddingDate: "2027-03-21T09:00:00+07:00",
  formattedDate: "Minggu, 21 Maret 2027",
  greetingVerse: {
    surah: "QS. Ar-Rum: 21",
    arabic: "وَمِنْ ءَايَٰتِهِۦٓ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَٰجًا لِّتَسْكُنُوٓا۟ إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِى ذَٰلِكَ لَءَايَٰتٍ لِّقَوْمٍ يَتَفَكَّرُونَ",
    translation:
      "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berpikir.",
  },
  introGreeting: {
    bismillah: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم",
    greeting: "Assalamu'alaikum Warahmatullahi Wabarakatuh",
    paragraph:
      "Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta'ala, kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri dan memberikan doa restu pada pernikahan kami:",
  },
  events: {
    akad: {
      title: "Akad Nikah",
      day: "Minggu",
      date: "21 Maret 2027",
      time: "08:00 - 10:00 WIB",
      startDateTime: "2027-03-21T08:00:00+07:00",
      endDateTime: "2027-03-21T10:00:00+07:00",
      venue: "Kediaman Mempelai Putri",
      address: "Gg Kramat 2, Jl. Masjid Baiturrohman, Bandungan, Gumalar, Kec. Adiwerna, Kabupaten Tegal, Jawa Tengah 52194",
      description: "Akad Nikah Adinda Rodhotul Jannah & Helfanza Nanda Alfara. Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir memberikan doa restu.",
      googleMapsUrl: "https://maps.app.goo.gl/UN6nsUG4gjaGbWhP8",
    },
    resepsi: {
      title: "Resepsi Pernikahan",
      day: "Minggu",
      date: "21 Maret 2027",
      time: "11:00 WIB - Selesai",
      startDateTime: "2027-03-21T11:00:00+07:00",
      endDateTime: "2027-03-21T15:00:00+07:00",
      venue: "Kediaman Mempelai Putri",
      address: "Gg Kramat 2, Jl. Masjid Baiturrohman, Bandungan, Gumalar, Kec. Adiwerna, Kabupaten Tegal, Jawa Tengah 52194",
      description: "Resepsi Pernikahan Adinda Rodhotul Jannah & Helfanza Nanda Alfara. Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir memberikan doa restu.",
      googleMapsUrl: "https://maps.app.goo.gl/UN6nsUG4gjaGbWhP8",
    },
  },
  bankAccounts: [
    {
      bank: "BANK MANDIRI",
      accountName: "ADINDA RODHOTUL JANNAH",
      accountNumber: "1390029162215",
    },
    {
      bank: "BCA",
      accountName: "HELFANZA NANDA ALFARA",
      accountNumber: "0471529833",
    },
  ],
  gallery: [
    {
      id: "gal-1",
      src: "/images/gallery-01.jpeg",
      alt: "Pernikahan Romantis Adinda & Elfan",
      caption: "Cinta yang Bersemi",
    },
    {
      id: "gal-2",
      src: "/images/gallery-02.jpeg",
      alt: "Momen Bahagia Bersama",
      caption: "Langkah Menuju Selamanya",
    },
    {
      id: "gal-3",
      src: "/images/gallery-03.jpeg",
      alt: "Tatapan Penuh Makna",
      caption: "Dua Hati Satu Janji",
    },
    {
      id: "gal-4",
      src: "/images/gallery-04.jpeg",
      alt: "Kehangatan Bersama",
      caption: "Ikatan Abadi",
    },
    {
      id: "gal-5",
      src: "/images/gallery-05.jpeg",
      alt: "Gaun dan Keindahan",
      caption: "Senyuman Terindah",
    },
    {
      id: "gal-6",
      src: "/images/gallery-06.jpeg",
      alt: "Genggaman Kasih",
      caption: "Meniti Masa Depan",
    },
  ],
  music: {
    src: "/music/wedding-song.aac",
    title: "Until I Found You",
    artist: "Acoustic Piano Version",
  },
  coverImage: "/images/gallery-02.jpeg",
  heroImage: "/images/hero.jpeg",
  closingImage: "/images/footer.jpeg",
  meta: {
    title: "Undangan Pernikahan Adinda & Elfan",
    description: "Kami mengundang Anda untuk merayakan hari bahagia pernikahan kami, Adinda & Elfan.",
    ogImage: "/images/gallery-02.jpeg",
  },
};
