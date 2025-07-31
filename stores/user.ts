import { defineStore } from "pinia";

type Profile = {
  country: string;
  address: string;
  postcode: string;
  idCode: string;
  birthday: string;
  idPhoto: string;
  facebook: string;
  linkedin: string;
  phone: string;
  mobile: string;
  home: string;
};

export const useUserStore = defineStore("user", {
  state: () => ({
    profile: {
      country: "",
      address: "",
      postcode: "",
      idCode: "",
      birthday: "",
      idPhoto: "✓",
      facebook: "",
      linkedin: "",
      phone: "",
      mobile: "",
      home: "",
    } as Profile,
    photoUrl: "",
    interests: [] as string[],
    name: "Test R",
  }),
  actions: {
    updateProfile(data: Partial<typeof this.profile>) {
      this.profile = { ...this.profile, ...data };
    },
    setPhoto(url: string) {
      this.photoUrl = url;
    },
    setInterests(interests: string[]) {
      this.interests = interests;
    },
    async submitData() {
      const data = {
        ...this.profile,
        photo: this.photoUrl,
        interests: this.interests,
        name: this.name,
      };
      console.log("Відправляємо дані:", data);
    },
  },
});
