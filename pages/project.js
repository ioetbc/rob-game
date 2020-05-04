
import React, { Component, Fragment } from 'react';
import { motion } from 'framer-motion'


class Project extends Component {
    render() {
        return (
            <motion.div exit={{ opacity: 0 }}>
                <h1>project page</h1>
                
            </motion.div>
        )
    }
}

export default Project;