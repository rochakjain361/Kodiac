import React, { Component } from "react";
import { Table } from "reactstrap";
import NewStudentModal from "./NewStudentModal";

import ConfirmRemovalModal from "./ConfirmRemovalModal";

class StudentList extends Component {
	render(){
		const students = this.props.students;
		return (
			<Table dark>
			<thead><tr>
			<th>Name</th>
            		<th>Email</th>
            		<th>Document</th>
            		<th>Phone</th>
            		<th>Registration</th>
            		<th></th></tr></thead>
			<tbody>
			{!students || students.length <= 0 ? (
				<tr>
				<td colSpan="6" align="center">
				<b> Ops, no one here yet</b>
				</td>
				</tr>
			) : (
				students.map(students => (
					<tr key={student.pk}>
					<td>{student.name}</td>
					<td>{stduent.email}</td>
					<td>{student.document}</td>
					<td>{student.phone}</td>
					<td>{student.registrationdate}</td>
					<td align="center">
					<NewStudentModal
					create={false}
					student={student}
					resetstate={this.props.resetState}
					/>
					&nbsp;&nbsp;
					<ConfirmRemovalModal
					pk={student.pk}
					resetState={this.props.resetState}
					/>
					</td>
					</tr>
				))
			)}
			</tbody>
			</Table>
		);
	}
}


export default StudentList;
