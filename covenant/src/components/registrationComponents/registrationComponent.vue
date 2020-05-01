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


        <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left has-icons-right">
                <input class="input is-danger" type="email" placeholder="Email input" value="hello@">
                <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
            </div>
            <p class="help is-danger">This email is invalid</p>
        </div>


        <div class="field">
            <label class="label">Message</label>
            <div class="control">
                <textarea class="textarea" placeholder="Textarea"></textarea>
            </div>
        </div>

        <div class="field">
            <div class="control">
                <label class="checkbox">
                    <input type="checkbox">
                    I agree to the <a href="#">terms and conditions</a>
                </label>
            </div>
        </div>

        <div class="field">
            <div class="control">
                <label class="radio">
                    <input type="radio" name="question">
                    Yes
                </label>
                <label class="radio">
                    <input type="radio" name="question">
                    No
                </label>
            </div>
        </div>

        <div class="field is-grouped">
            <div class="control">
                <button class="button is-link">Submit</button>
            </div>
            <div class="control">
                <button class="button is-link is-light">Cancel</button>
            </div>
        </div>
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