import term from '@/components/agreement/agreement.md'
import styles from '@/components/privacy/index.module.scss'

export default function Term() {
	return <div dangerouslySetInnerHTML={{ __html: term }} className={styles['agreement']} />;
}
