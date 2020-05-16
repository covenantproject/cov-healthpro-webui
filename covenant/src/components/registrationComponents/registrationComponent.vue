<template>
    <div id="root-div">
        <p id="registration-title">Register New User</p>
        <div class="field">
            <label class="label">Email</label>
            <div class="control">
                <input class="input" type="text" placeholder="Email">
            </div>
        </div>

        <div class="field">
            <label class="label">Username</label>
            <div class="control">
                <input class="input" type="text" placeholder="Username">
            </div>
        </div>

        <p id="info-password">The initial password will be: password</p>
        <br>
        <div class="field">
            <label class="label">First Name</label>
            <div class="control">
                <input class="input" type="text" placeholder="First Name">
            </div>
        </div>

        <div class="field">
            <label class="label">Last Name</label>
            <div class="control">
                <input class="input" type="text" placeholder="Last Name">
            </div>
        </div>

        <div class="field">
            <label class="label">Suffix</label>
            <div class="control">
                <div class="select">
                    <select>
                        <option>Mr.</option>
                        <option>Ms</option>
                        <option>Miss</option>
                        <option>Mrs</option>
                        <option>Dr</option>
                        <option>Prof</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="field">
            <label class="label">Gender</label>
            <div class="control">
                <div class="select">
                    <select>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Transgender</option>
                        <option>Non-Binary</option>
                        <option>Gender Neutral</option>
                        <option>Agender</option>
                        <option>Pangender</option>
                        <option>Genderqueer</option>
                        <option>Two-Spirit</option>
                        <option>Third Gender</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="field">
            <label class="label">Birth Date</label>
            <date-picker v-model="time1" valueType="format"></date-picker>
        </div>
        <br>
        <div class="field">
            <label class="label">Phone Number</label>
            <div class="control">
                <input class="input" type="text" placeholder="Phone Number">
            </div>
        </div>

        <p></p>

        <div class="field">
            <label class="label">User Roles</label>
            <div class="control">
                <label class="checkbox">
                    <input type="checkbox">
                    Health Professional
                </label>
                <br>
                <label class="checkbox">
                    <input type="checkbox">
                    User Manager (can add new users)
                </label>
            </div>
        </div>
        <br>
        <div class="field">
            <label class="label">Health Professional Type</label>
            <div class="control">
                <input class="input" type="text" placeholder="Health Professional Type">
            </div>
        </div>

        <div class="field">
            <label class="label">Job Title</label>
            <div class="control">
                <input class="input" type="text" placeholder="Job Title">
            </div>
        </div>

        <div class="field">
            <label class="label">Office Address</label>
            <div class="control">
                <input class="input" type="text" placeholder="Office Address">
            </div>
        </div>
        <br>
        <button class="button is-link is-fullwidth">Register</button>
    </div>
</template>

<script>
    import DatePicker from "vue2-datepicker";
    import "vue2-datepicker/index.css";

    export default {
        name: "registrationComponent",

        components: {
            DatePicker
        },
        data() {
            return {
                time1: null
            }
        }
    }
</script>

<style scoped>
    #root-div {
        max-width: 900px;
        margin: 1rem;
    }

    #registration-title {
        font-size: 1.4rem;
        font-weight: bold;
        margin-bottom: 2rem;
    }

    #info-password {
        font-weight: bold;
        margin-top: 1rem;
        margin-bottom: 1rem;
        color: indianred;
    }
</style>