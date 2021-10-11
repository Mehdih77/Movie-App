import styles from './DashboardComponents.module.css';

export default function ProfileSettings() {
    return (
        <section className={styles.profile_settings}>
            <div className={styles.profile_settings_details}>
                <div>
                    <img src="/images/user.jpg" alt="user profile" />
                </div>
                <div>
                    <p>Mehdi H</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ratione neque consequuntur eius, unde animi temporibus excepturi exercitationem accusantium deleniti mollitia</p>
                </div>
            </div>
            <div className={styles.profile_settings_form}>
                <h5>General Information</h5>
                    <div className="row">
                        <div className={`${styles.profile_settings_input} col-xl-6`}>
                            <span>Username</span>
                            <input type="text" placeholder='Mehdi H77' />
                        </div>
                        <div className={`${styles.profile_settings_input} col-xl-6`}>
                            <span>Email Address</span>
                            <input type="text" placeholder='Mehdi.havaei77@gmail.com' />
                        </div>
                        <div className={`${styles.profile_settings_input} col-xl-6`}>
                            <span>First Name</span>
                            <input type="text" placeholder='Mehdi' />
                        </div>
                        <div className={`${styles.profile_settings_input} col-xl-6`}>
                            <span>Last Name</span>
                            <input type="text" placeholder='H' />
                        </div>
                    </div>
                <h5>Change Password</h5>
                    <div className="row">
                        <div className={`${styles.profile_settings_input} col-xl-6`}>
                            <span>Current Password</span>
                            <input type="password" placeholder='********' />
                        </div>
                        <div className={`${styles.profile_settings_input} col-xl-6`}>
                            <span>New Password</span>
                            <input type="password" placeholder='********' />
                        </div>
                    </div>
                <h5>Personal Information</h5>
                    <div className="row">
                        <div className={`${styles.profile_settings_input} col-xl-12`}>
                            <span>Date of Birth</span>
                            <input type="date" />
                        </div>
                        <div className={`${styles.profile_settings_input} col-xl-6`}>
                            <span>Gender</span>
                            <select>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                        <div className={`${styles.profile_settings_input} col-xl-6`}>
                            <span>Language</span>
                            <select>
                                <option value="Male">English</option>
                                <option value="Female">Persian</option>
                                <option value="Female">Arabic</option>
                                <option value="Female">German</option>
                                <option value="Female">French</option>
                                <option value="Female">Italian</option>
                                <option value="Female">Russian</option>
                                <option value="Female">Spanish</option>
                            </select>
                        </div>
                    </div>
                <div>
                    <button>Save</button>
                    <button>Cancel</button>
                </div>
            </div>
        </section>
    )
}
