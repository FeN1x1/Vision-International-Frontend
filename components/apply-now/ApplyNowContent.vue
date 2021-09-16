<template>
  <div class="bg-white py-6 ">
    <div
      class="max-w-screen-xl px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 py-16 mx-auto text-gray-900 lg:rounded"
    >
      <div class="flex flex-col justify-between">
        <div class="my-auto">
          <h2
            class="text-3xl lg:text-5xl text-gray-900 font-bold leading-tight"
          >
            Apply with us
          </h2>
          <div class="text-xl lg:text-2xl text-gray-900 mt-8">
            Send us a message and we’ll get back to you as soon as possible
          </div>
        </div>
        <div class="mt-8 mr-8 text-center mb-auto">
          <ApplySvg />
        </div>
      </div>

      <form @submit.prevent="handleSubmit" enctype="multipart/form-data">
        <div class="form-group mt-4">
          <label class="text-gray-900 text-xl font-semibold">First name</label>
          <input
            v-model="applicant.firstname"
            v-validate="'required'"
            id="firstname"
            name="firstname"
            type="text"
            :class="{
              'border-palette-5': submitted && errors.has('firstname'),
            }"
            class="form-control block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-900"
          />
          <div v-if="submitted && errors.has('firstname')" class="mt-2">
            {{ errors.first("firstname") }}
          </div>
        </div>

        <div class="form-group mt-4">
          <span class="text-gray-900 text-xl font-semibold">Surname</span>
          <input
            v-model="applicant.surname"
            v-validate="'required'"
            id="surname"
            type="text"
            name="surname"
            :class="{ 'border-palette-5': submitted && errors.has('surname') }"
            class="form-control text-gray-900 block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-900"
          />
          <div v-if="submitted && errors.has('surname')" class="mt-2">
            {{ errors.first("surname") }}
          </div>
        </div>

        <div class="form-group mt-4">
          <span class="text-gray-900 text-xl font-semibold">E-mail</span>
          <input
            v-model="applicant.email"
            v-validate="'required|email'"
            id="email"
            type="text"
            name="email"
            :class="{ 'border-palette-5': submitted && errors.has('email') }"
            class="form-control text-gray-900 block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-900"
          />
          <div v-if="submitted && errors.has('email')" class="mt-2">
            {{ errors.first("email") }}
          </div>
        </div>

        <div class="form-group mt-4">
          <span class="text-gray-900 text-xl font-semibold">Age</span>
          <input
            v-model="applicant.age"
            v-validate="'required|between:1,120'"
            id="age"
            type="text"
            name="age"
            :class="{ 'border-palette-5': submitted && errors.has('age') }"
            class="form-control text-gray-900 block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-900"
          />
          <div v-if="submitted && errors.has('age')" class="mt-2">
            {{ errors.first("age") }}
          </div>
        </div>

        <div class="form-group mt-4">
          <span class="text-gray-900 text-xl font-semibold">About</span>
          <textarea
            v-model="applicant.about"
            v-validate="'required|max:255'"
            id="about"
            type="text"
            name="about"
            :class="{ 'border-palette-5': submitted && errors.has('about') }"
            class="form-control text-gray-900 block w-full h-64 bg-gray-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-900"
          />
          <div v-if="submitted && errors.has('about')" class="mt-2">
            {{ errors.first("about") }}
          </div>
        </div>

        <div class="mt-6">
          <label
            class="w-full h-32 flex flex-col items-center  bg-white text-blue rounded-lg tracking-wide border border-blue cursor-pointer"
          >
            <div class="my-auto">
              <svg
                class="w-8 h-8 mx-auto"
                :fill="this.fileExists"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"
                />
              </svg>
              <span class="text-gray-900 text-xl font-semibold"
                >Upload a CV <span class="text-sm font-bold"> (pdf, docx, doc)</span></span
              >
            </div>
            <input
              v-validate="'required|ext:pdf,doc,docx'"
              name="file"
              @change="onFileUpload"
              id="file"
              ref="file"
              type="file"
              class="hidden"
            />
            <div v-if="submitted && errors.has('file')" class="mt-2">
              {{ errors.first("file") }}
            </div>
          </label>
          <div class="flex mt-4 flex-wrap">
            <ProgressBar :percentage="uploadPercentage" class="mx-2 mb-2" />
          </div>
        </div>

        <div class="mt-6">
          <label class="checkbox font-semibold">
            <input
              name="terms"
              id="terms"
              v-validate="'required'"
              type="checkbox"
            />
            I agree to the terms and conditions.
          </label>
          <div class="mt-2" v-show="errors.has('terms')">
            Agreeing to our terms and conditions is required
          </div>
        </div>
        <div class="mt-8 h-8">
          <transition mode="out-in" name="fade-in">
            <button
              v-if="!state.isSending"
              type="submit"
              class="w-full py-2 h-14 transition duration-300 ease-in-out transform hover:bg-palette-5 text-gray-900 text-2xl border-gray-900 hover:text-white hover:border-transparent px-4 border rounded"
            >
              Apply now
            </button>
            <div v-else class="mt-6 py-4">
              <HollowDotsSpinner
                :animation-duration="500"
                :size="60"
                :color="'#EB5E28'"
                class="m-auto"
              />
            </div>
          </transition>
        </div>
      </form>
    </div>
    <notificationGroup group="bottom-success" position="bottom">
      <div
        class="fixed inset-x-0 bottom-0 flex px-4 py-6 pointer-events-none p-6 items-start justify-end"
      >
        <div class="max-w-sm w-full">
          <notification v-slot="{ notifications }">
            <div
              class="flex max-w-sm w-full mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-4"
              v-for="notification in notifications"
              :key="notification.id"
            >
              <div class="flex justify-center items-center w-12 bg-green-500">
                <svg
                  class="h-6 w-6 fill-current text-white"
                  viewBox="0 0 40 40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z"
                  ></path>
                </svg>
              </div>

              <div class="-mx-3 py-2 px-4">
                <div class="mx-3">
                  <span class="text-green-500 font-semibold">{{
                    notification.title
                  }}</span>
                  <p class="text-gray-600 text-sm">{{ notification.text }}</p>
                </div>
              </div>
            </div>
          </notification>
        </div>
      </div>
    </notificationGroup>
    <notificationGroup group="bottom-error" position="bottom">
      <div
        class="fixed inset-x-0 bottom-0 flex px-4 py-6 pointer-events-none p-6 items-start justify-end"
      >
        <div class="max-w-sm w-full">
          <notification v-slot="{ notifications }">
            <div
              class="flex max-w-sm w-full mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-4"
              v-for="notification in notifications"
              :key="notification.id"
            >
              <div class="flex justify-center items-center w-12 bg-red-500">
                <svg
                  class="h-6 w-6 fill-current text-white"
                  viewBox="0 0 40 40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z"
                  ></path>
                </svg>
              </div>

              <div class="-mx-3 py-2 px-4">
                <div class="mx-3">
                  <span class="text-red-500 font-semibold">{{
                    notification.title
                  }}</span>
                  <p class="text-gray-600 text-sm">{{ notification.text }}</p>
                </div>
              </div>
            </div>
          </notification>
        </div>
      </div>
    </notificationGroup>
  </div>
</template>

<style scoped></style>

<script>
import { HollowDotsSpinner } from "epic-spinners";

export default {
  components: {
    HollowDotsSpinner,
  },
  data() {
    return {
      applicant: {
        firstname: "",
        surname: "",
        age: "",
        email: "",
        about: "",
      },
      fileExists: "#000000",
      submitted: false,
      file: null,
      uploadPercentage: 0,
      localhostApi: "http://localhost:8000/api/applicants",
      productionApi: "https://admin.visionintlpro.eu/api/applicants",
      state: {
        isSending: false,
      },
    };
  },
  methods: {
    onFileUpload(event) {
      this.file = this.$refs.file.files[0];
      this.fileExists = "#EB5E28";
    },
    handleSubmit(e) {
      this.submitted = true;
      this.$validator.validate().then((valid) => {
        if (valid) {
          this.state.isSending = true;
          this.submitData();
        } else {
          this.state.isSending = false;
        }
      });
    },
    appendFormData() {
      let formData = new FormData();
      formData.append("file", this.file);
      formData.append("firstname", this.applicant.firstname);
      formData.append("surname", this.applicant.surname);
      formData.append("age", this.applicant.age);
      formData.append("email", this.applicant.email);
      formData.append("about", this.applicant.about);
      formData.append("cv", "test");
      return formData;
    },
    clearForm() {
      this.applicant.firstname = "";
      this.applicant.surname = "";
      this.applicant.age = "";
      this.applicant.email = "";
      this.applicant.about = "";
      this.file = null;
      this.submitted = false;
      document.getElementById("terms").checked = false;
      document.getElementById("file").value = "";
      this.uploadPercentage = 0;
      this.fileExists = "#000000";
    },
    submitData() {
      this.$axios.setHeader("Content-Type", "multipart/form-data");
      this.$axios
        .$post(this.productionApi, this.appendFormData(), {
          onUploadProgress: function(progressEvent) {
            this.uploadPercentage = parseInt(
              Math.round((progressEvent.loaded / progressEvent.total) * 100)
            );
          }.bind(this),
        })
        .then(
          function(response) {
            this.$notify(
              {
                group: "bottom-success",
                title: "Success",
                text: "Your application was sent succesfully!",
              },
              5000
            );
            this.errors.clear();
            this.clearForm();
            this.state.isSending = false;
          }.bind(this)
        )
        .catch((error) => {
          this.$notify(
            {
              group: "bottom-error",
              title: "Error",
              text: "There was an error. Try sending your application later.",
            },
            5000
          );
          this.state.isSending = false;
        });
    },
  },
};
</script>

<style scoped>
.fade-in-enter-active {
  transition: opacity 300ms cubic-bezier(0.55, 0.085, 0.68, 0.53);
}

.fade-in-leave-active {
  transition: opacity 225ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.fade-in-enter,
.fade-in-leave-to {
  opacity: 0;
}
</style>
