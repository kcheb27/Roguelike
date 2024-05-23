import Header from "../components/header";
import Text from "../components/Text"
import Styles from "./OS.module.css"
function OS(){
    return(
        <>
        <Header title = "OS components"/>
        <div className={Styles.title}>
        <h2 >Description:</h2>
        <p>This is a project made in my Intro to Operating Systems class. Each box Represents a seperate project that emulated some functionality of an operating system.</p>
        <a href="https://github.com/kcheb27/EC440.git" className={Styles.link}>(Click Here for Github Repo)</a>
        </div>

        <div className={Styles.Body}>
        <Text title= "Simple Shell"
        content = "This project implemented a basic shell which is able to execute commands, redirect the standard input/output (​stdin/stdout​) of commands to files, pipe the output of commands to other commands, and carry out commands in the background without leaving zombie commands around.        "></Text>
        
        <Text title= "Threading library:" content = "This project is a basic thread system for Linux. The pthread_create() function creates a new thread within a process. Upon successful completion, pthread_create() stores the ID of the created thread in the location referenced by thread. In our implementation, the second argument (attr) shall always be NULL. The thread is created and executes start_routine with arg as its sole argument. If the start_routine returns, the effect shall be as if there was an implicit call to pthread_exit(). Note that the thread in which main() was originally invoked differs from this. When it returns from main(), the effect shall be as if there was an implicit call to exit() using the return value of main() as the exit status. void pthread_exit(void *retval); The pthread_exit() function terminates the calling thread, and returns a value via retval that is available to another thread in the same process that calls pthread_join(). The process shall exit with an exit status of 0 after the last thread has been terminated. The behavior is as if the implementation called exit() with a zero argument at thread termination time. int pthread_join(pthread_t thread, void **retval) The pthread_join() function waits for the thread identified by the ID “thread” to terminate. If that thread has already terminated, then it returns immediately with the retval passed by pthread_exit. The pthread_self() function shall return the thread ID of the calling thread."
        
        />
        <Text title = "Thread Level Storage and COW" 
        content = "implemented a library that provides protected memory regions for threads, which can be used for thread local storage.  Additionally added Copy on write to ensure storage and write efficiency. Implemented: tls_write(),tls_deystroy(),tls_clone"></Text>
        <Text title = "File System implemented on a Virtual Disk"
        content = "implemented a library that offers a set of basic file system calls (such as open, read, write, ...) to applications. The file data and file system meta-information is stored on a virtual disk. This virtual disk is actually a single file that is stored on the 'real' file system provided by the Linux operating system. Implemented basic inode, superblock, and bitmapping data structures. Allowed for Mounting and Unmounting of Filesystems aswell as writing, deleting, reading, and creating files. Additionally allowed for Lseek and truncate functionalities"/>
        <Text title = "Thread Syncronization"
        content = "Altered my thread Scheduling library to implement synchronization in order to allow threads to alter the same variables in code without causing continuity errors in their values.implemented the functions to facilitate the creation and usage of a mutex lock and a barrier lock"
        />
        </div>
        
        </>
    );
}
export default OS