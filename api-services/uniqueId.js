import { randomBytes } from 'node:crypto';

export default function uniqueId() {
    return `${Date.now()}${randomBytes(4).toString('hex')}`;
}

export function withUniqueId(template, id) {
    return Object.fromEntries(
        Object.entries(template).map(([key, value]) => [
            key,
            value.replaceAll('{{id}}', id)
        ])
    );
}
