<script setup lang="ts">
import { apiCsrfCookie, apiLogin, apiLogout, apiUser } from '../plugins/api';
import { ref } from 'vue'
import type { Ref } from 'vue'

let email = ref("")
let password = ref("")
let messages : Ref<string[]> = ref([])
let notification = ref("")

// Set csrf Cookie
apiCsrfCookie()

function login() {
    messages.value.splice(0)
    notification.value = ""

    apiLogin(email.value, password.value)
    .then(function (response) {
        // handle success
        if (response.data.errors !== undefined) {
            notifyErrores(response.data.errors)
        } else {
            notification.value = "notification is-primary is-light"
            messages.value.push("You are successfully logged in")
        }
    })
    .catch(function (response) {
        if (response.response.data.errors !== undefined) {
            notifyErrores(response.response.data.errors)
        }
    })
}

function getUser() {
    messages.value.splice(0)
    notification.value = ""

    apiUser().then(function (response) {
        notification.value = "notification is-primary is-light"
        messages.value.push(response.data)
    })
    .catch(function (response) {
        notification.value = "notification is-danger is-light"
        messages.value.push(response.response.data)
    })
}

function logout() {
    messages.value.splice(0)
    notification.value = ""

    apiLogout().then(function (response) {
        notification.value = "notification is-primary is-light"
        messages.value.push(response.data)
    })
    .catch(function (response) {
        notification.value = "notification is-danger is-light"
        messages.value.push(response.response.data)
    })
}

function notifyErrores(errors: any) {
    notification.value = "notification is-danger is-light"
    errors.forEach((element: any) => {
        messages.value.push(element)
    });
}
</script>

<template>
    <div class="mt-5">
        <div class="columns is-centered has-text-centered">
            <div class="column">
                <h1 class="title">Laravel + Sanctum Login Example</h1>
            </div>
        </div>

        <div class="columns is-centered has-text-centered">
            <div class="column is-6">
                <div class="field">
                    <p class="control has-icons-left has-icons-right">
                        <input class="input" type="email" placeholder="Email" v-model="email">
                        <span class="icon is-small is-left">
                            <font-awesome-icon icon="fa-solid fa-envelope" />
                        </span>
                        <span class="icon is-small is-right">
                            <font-awesome-icon icon="fa-solid fa-check" />
                        </span>
                    </p>
                </div>
                <div class="field">
                    <p class="control has-icons-left">
                        <input class="input" type="password" placeholder="Password" v-model="password">
                        <span class="icon is-small is-left">
                            <font-awesome-icon icon="fa-solid fa-lock" />
                        </span>
                    </p>
                </div>
                <div>
                    <button class="button is-success is-rounded" v-on:click="login">Login</button>
                </div>
                <div class="columns mt-5">
                    <div class="column">
                        <h1 class="title">Try to get user information from protected route</h1>
                    </div>
                </div>
                <div class="mt-3">
                    <button class="button is-success is-rounded" v-on:click="getUser">Get User Information</button>
                </div>
                <div class="columns mt-5">
                    <div class="column">
                        <h1 class="title">Logout</h1>
                    </div>
                </div>
                <div class="mt-3">
                    <button class="button is-success is-rounded" v-on:click="logout">Log out</button>
                </div>
                <div class="columns mt-5">
                    <div class="column">
                        <h1 class="title">Response output</h1>
                    </div>
                </div>
                <div class="card p-6">
                    <div class="card-content">
                        <div class="content">
                            <!-- Result get user from api -->
                            <div :class="notification">
                                <div v-for="(message) in messages">
                                    {{ message }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>